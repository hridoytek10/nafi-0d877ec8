"use client"

import React from "react"
import site from "../data/site.json"

export default function Home() {
  const linkLabel = (href) => {
    try {
      return new URL(href).hostname.replace(/^www\./, "")
    } catch {
      return href
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-bold text-xl text-slate-900">{site.name}</div>
          <nav className="flex gap-6 text-sm text-slate-700">
            <a href="#about" className="hover:text-slate-900">
              {site.section1Title}
            </a>
            <a href="#projects" className="hover:text-slate-900">
              {site.section2Title}
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                {site.heroSubtitle}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                {site.heroTitle}
              </h1>
              <p className="text-lg text-slate-600">{site.bio}</p>
              <div className="flex flex-wrap gap-3">
                {site.ctaLabel && site.ctaLink && (
                  <a
                    href={site.ctaLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
                  >
                    {site.ctaLabel}
                  </a>
                )}
                {site.github && (
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    {linkLabel(site.github)}
                  </a>
                )}
                {site.linkedin && (
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    {linkLabel(site.linkedin)}
                  </a>
                )}
                {site.twitter && (
                  <a
                    href={site.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    {linkLabel(site.twitter)}
                  </a>
                )}
                {site.website && (
                  <a
                    href={site.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    {linkLabel(site.website)}
                  </a>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-purple-300/40 blur-3xl" />
                <div className="relative rounded-full border-4 border-white shadow-xl overflow-hidden w-48 h-48 md:w-64 md:h-64">
                  <img
                    src={site.profileImage}
                    alt={site.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 border-t bg-white">
          <div className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                {site.section1Title}
              </h2>
              <p className="text-slate-600 leading-relaxed">{site.section1Text}</p>
            </div>
            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-6 text-sm text-slate-600">
              <p>{site.address}</p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 bg-slate-50 border-t">
          <div className="max-w-5xl mx-auto px-4 space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                {site.section2Title}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">{site.section2Text}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <span>{site.name}</span>
          <span>{site.heroSubtitle}</span>
        </div>
      </footer>
    </div>
  )
}

