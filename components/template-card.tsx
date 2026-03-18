import Image from "next/image"
import type { TemplateMeta } from "@/lib/templates"

type Props = {
  template: TemplateMeta
}

export function TemplateCard({ template }: Props) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border bg-white text-left shadow-sm">
      <div className="relative h-40 w-full bg-slate-100">
        <Image
          src={`/templates/${template.id}${template.previewImage}`}
          alt={template.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="px-4 py-3">
        <h3 className="text-sm font-medium text-slate-900">{template.name}</h3>
      </div>
    </div>
  )
}

