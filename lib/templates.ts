import fs from "fs"
import path from "path"

const TEMPLATES_ROOT = path.join(process.cwd(), "templates")

export type TemplateMeta = {
  id: string
  name: string
  path: string
  previewImage: string
}

export function getTemplates(): TemplateMeta[] {
  if (!fs.existsSync(TEMPLATES_ROOT)) return []

  return fs
    .readdirSync(TEMPLATES_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const id = entry.name
      const templatePath = path.join(TEMPLATES_ROOT, id)
      const previewImage = "/preview.png"

      return {
        id,
        name: id.replace(/-/g, " "),
        path: templatePath,
        previewImage,
      }
    })
}

export function getTemplatePath(templateId: string): string {
  const templatePath = path.join(TEMPLATES_ROOT, templateId)
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found: ${templateId}`)
  }
  return templatePath
}

