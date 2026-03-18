import { NextResponse } from "next/server"
import { randomUUID } from "crypto"
import { getTemplatePath } from "@/lib/templates"
import { copyTemplateToBuildDir, writeSiteJson, saveProfileImage } from "@/lib/fs-utils"
import { createRepoForBuild, pushProjectToRepo } from "@/lib/github"
import { deployProject } from "@/lib/vercel"

type GenerateRequestBody = {
  templateId: string
  userData: unknown
  // base64 encoded JPEG image (optional)
  profileImageBase64?: string
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as GenerateRequestBody

    if (!body.templateId || !body.userData) {
      return NextResponse.json({ error: "templateId and userData are required" }, { status: 400 })
    }

    const buildId = randomUUID()

    const templatePath = getTemplatePath(body.templateId)
    const buildDir = copyTemplateToBuildDir(templatePath, buildId)

    writeSiteJson(buildDir, body.userData)

    if (body.profileImageBase64) {
      const buffer = Buffer.from(body.profileImageBase64, "base64")
      saveProfileImage(buildDir, buffer)
    }

    const repo = await createRepoForBuild(buildId)
    await pushProjectToRepo(buildDir, repo)

    const deployment = await deployProject(repo)

    return NextResponse.json({
      buildId,
      repoUrl: repo.url,
      liveUrl: deployment.url,
    })
  } catch (error) {
    console.error("Generation error:", error)
    return NextResponse.json({ error: "Generation failed" }, { status: 500 })
  }
}

