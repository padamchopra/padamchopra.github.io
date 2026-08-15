import fs from "fs"
import path from "path"
import { marked } from "marked"

marked.use({ gfm: true })

export type Note = {
  slug: string
  title: string
  date: string
  html: string
}

const NOTES_DIR = path.join(process.cwd(), "content/notes")

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

export function getNotes(): Note[] {
  if (!fs.existsSync(NOTES_DIR)) return []
  const files = fs.readdirSync(NOTES_DIR).filter((file) => file.endsWith(".md"))
  const notes = files.map((file) => {
    const raw = fs.readFileSync(path.join(NOTES_DIR, file), "utf8")
    const { meta, body } = parseFrontMatter(raw)
    const slug = file.replace(/\.md$/, "")
    return {
      slug,
      title: meta.title || slug,
      date: meta.date || "",
      html: marked.parse(body, { async: false }) as string,
    }
  })
  return notes.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getNote(slug: string): Note | undefined {
  return getNotes().find((note) => note.slug === slug)
}

export function formatNoteDate(date: string) {
  if (!date) return ""
  const parsed = new Date(`${date}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}
