import fs from "fs"
import path from "path"
import { serialize } from "next-mdx-remote/serialize"
import remarkGfm from "remark-gfm"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

const PROJECTS_DIR = path.join(process.cwd(), "content/projects")

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

export async function getProjectMdx(
  slug: string,
): Promise<MDXRemoteSerializeResult | null> {
  const file = path.join(PROJECTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, "utf8")
  const { body } = parseFrontMatter(raw)
  return serialize(body, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  })
}
