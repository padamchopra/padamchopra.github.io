import { marked } from "marked"
import writeups from "@/data/projectWriteups.json"

marked.use({ gfm: true })

function parseFrontMatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) {
    return { meta: {} as Record<string, string>, body: raw }
  }
  const meta: Record<string, string> = {}
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":")
    if (idx === -1) continue
    meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim().replace(/^["']|["']$/g, "")
  }
  return { meta, body: match[2] }
}

function escapeAttr(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
}

function shotToHtml(attrs: string) {
  const src = attrs.match(/src="([^"]*)"/)?.[1] ?? ""
  const alt = attrs.match(/alt="([^"]*)"/)?.[1] ?? ""
  const width = attrs.match(/width="([^"]*)"/)?.[1]
  const cls =
    width === "phone"
      ? "v-shot is-phone"
      : width === "panel"
        ? "v-shot is-panel"
        : "v-shot"
  return `\n\n<figure class="${cls}"><img src="${escapeAttr(src)}" alt="${escapeAttr(alt)}" /></figure>\n\n`
}

export function getProjectHtml(slug: string): string | null {
  const raw = (writeups as Record<string, string>)[slug]
  if (typeof raw !== "string") return null
  const { body } = parseFrontMatter(raw)
  const withShots = body.replace(/<Shot\s+([^>]*?)\s*\/>/g, (_, attrs: string) =>
    shotToHtml(attrs),
  )
  return marked.parse(withShots, { async: false }) as string
}
