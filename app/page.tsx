import { getTemplates } from "@/lib/templates"
import { TemplateCard } from "@/components/template-card"

export default async function Home() {
  const templates = getTemplates()

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-20">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Landing Page Generator
          </h1>
          <p className="max-w-2xl text-slate-300">
            Pick a template, fill in your details, and we&apos;ll generate a GitHub repo and
            Vercel deployment backed by <code>data/site.json</code>.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
          </div>
        </section>
      </main>
  )
}
