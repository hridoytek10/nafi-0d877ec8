import fs from "fs"
import path from "path"

export function copyTemplateToBuildDir(templatePath: string, buildId: string): string {
  const buildRoot = path.join("/tmp", buildId)

  copyDirRecursive(templatePath, buildRoot)
  return buildRoot
}

export function writeSiteJson(buildDir: string, userData: unknown) {
  const dataDir = path.join(buildDir, "data")
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  const sitePath = path.join(dataDir, "site.json")
  fs.writeFileSync(sitePath, JSON.stringify(userData, null, 2), "utf-8")
}

export function saveProfileImage(buildDir: string, buffer: Buffer) {
  const publicDir = path.join(buildDir, "public")
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  const profilePath = path.join(publicDir, "profile.jpg")
  fs.writeFileSync(profilePath, buffer)
}

function copyDirRecursive(src: string, dest: string) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath)
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

