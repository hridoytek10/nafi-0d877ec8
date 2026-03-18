"use client"

import { useState } from "react"

export default function GeneratePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ liveUrl: string; repoUrl: string } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    const formData = new FormData(event.currentTarget)

    const payload = {
      templateId: "developer-portfolio",
      userData: {
        name: formData.get("name"),
        bio: formData.get("bio"),
        address: formData.get("address"),
        heroTitle: formData.get("heroTitle"),
        heroSubtitle: formData.get("heroSubtitle"),
        section1Title: formData.get("section1Title"),
        section1Text: formData.get("section1Text"),
        section2Title: formData.get("section2Title"),
        section2Text: formData.get("section2Text"),
        github: formData.get("github"),
        linkedin: formData.get("linkedin"),
        twitter: "",
        website: "",
        profileImage: "/profile.jpg",
      },
    }

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const json = await response.json()
    if (response.ok) {
      setResult({ liveUrl: json.liveUrl, repoUrl: json.repoUrl })
    }

    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-20">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold">Generate landing page</h1>
          <p className="text-slate-300 text-sm">
            Fill in the fields below. Your data will be written into <code>data/site.json</code> for the
            selected template.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" name="name" />
            <Field label="Hero subtitle" name="heroSubtitle" />
            <Field label="Hero title" name="heroTitle" />
            <Field label="Address" name="address" />
          </div>
          <Field label="Short bio" name="bio" textarea />
          <Field label="About section title" name="section1Title" />
          <Field label="About section text" name="section1Text" textarea />
          <Field label="Projects section title" name="section2Title" />
          <Field label="Projects section text" name="section2Text" textarea />
          <div className="grid gap-4 md:grid-cols-3">
            <Field label="GitHub URL" name="github" />
            <Field label="LinkedIn URL" name="linkedin" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-md bg-slate-50 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white disabled:opacity-60"
          >
            {isSubmitting ? "Generating..." : "Generate"}
          </button>
        </form>

        {result && (
          <div className="space-y-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm">
            <p className="font-medium text-emerald-300">Generation complete</p>
            <p>
              Live URL:{" "}
              <a href={result.liveUrl} target="_blank" rel="noreferrer" className="underline">
                {result.liveUrl}
              </a>
            </p>
            <p>
              GitHub repo:{" "}
              <a href={result.repoUrl} target="_blank" rel="noreferrer" className="underline">
                {result.repoUrl}
              </a>
            </p>
          </div>
        )}
      </section>
    </main>
  )
}

type FieldProps = {
  label: string
  name: string
  textarea?: boolean
}

function Field({ label, name, textarea }: FieldProps) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="text-slate-200">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          className="min-h-[80px] rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50"
        />
      ) : (
        <input
          name={name}
          className="h-9 rounded-md border border-slate-700 bg-slate-950 px-3 text-sm text-slate-50"
        />
      )}
    </label>
  )
}

