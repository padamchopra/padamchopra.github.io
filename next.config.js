/** @type {import('next').NextConfig} */
const fs = require("fs")
const path = require("path")

function bundleProjectWriteups() {
  const dir = path.join(__dirname, "content/projects")
  const out = path.join(__dirname, "src/data/projectWriteups.json")
  if (!fs.existsSync(dir)) return
  /** @type {Record<string, string>} */
  const writeups = {}
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".mdx")) continue
    writeups[file.replace(/\.mdx$/, "")] = fs.readFileSync(
      path.join(dir, file),
      "utf8",
    )
  }
  const json = `${JSON.stringify(writeups, null, 2)}\n`
  const prev = fs.existsSync(out) ? fs.readFileSync(out, "utf8") : ""
  if (prev !== json) fs.writeFileSync(out, json)
}

bundleProjectWriteups()

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/v/:look", destination: "/", permanent: false },
      { source: "/press", destination: "/links", permanent: false },
      { source: "/watching", destination: "/watched", permanent: false },
    ]
  },
}

module.exports = nextConfig
