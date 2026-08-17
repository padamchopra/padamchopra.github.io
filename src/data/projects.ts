export const projectTags = [
  "tools",
  "ai",
  "android",
  "ios",
  "macos",
  "web",
  "cli",
  "games",
] as const

export type ProjectTag = (typeof projectTags)[number]

export type ProjectItem = {
  slug: string
  name: string
  href: string
  year?: string
  stack: string
  description: string
  line: string
  still?: string
  icon?: string
  tags: ProjectTag[]
  updated: string
}

const items: ProjectItem[] = [
  {
    slug: "phere",
    name: "Phere",
    href: "https://phere.app",
    stack: "Web",
    description:
      "A workspace for Indian weddings — guests, vendors, budget, and the rest of the chaos, in one place.",
    line: "Indian wedding planning, in one place.",
    tags: ["web"],
    updated: "2026-08-16",
  },
  {
    slug: "agent-sync",
    name: "agent-sync",
    href: "https://github.com/padamchopra/agent-sync",
    stack: "CLI",
    description:
      "A private sync for skills and agents I share across Claude Code and Codex.",
    line: "Sync skills and agents across Claude and Codex.",
    tags: ["ai", "cli", "tools"],
    updated: "2026-08-16",
  },
  {
    slug: "sideload",
    name: "Sideload",
    href: "https://github.com/padamchopra/Sideload",
    stack: "macOS",
    description:
      "A Mac menu bar that builds and installs Android debug APKs from a git checkout or local worktree.",
    line: "Menu bar that sideloads Android debug APKs.",
    tags: ["macos", "tools"],
    updated: "2026-08-14",
  },
  {
    slug: "mission-control",
    name: "Mission Control",
    href: "https://github.com/padamchopra/mission-control",
    stack: "iOS",
    description: "An iPhone remote for a fleet of coding sessions on my Mac.",
    line: "iPhone remote for coding sessions on my Mac.",
    tags: ["ai", "ios", "tools"],
    updated: "2026-08-02",
  },
  {
    slug: "linear-cli",
    name: "linear-cli",
    href: "https://github.com/padamchopra/linear-cli",
    stack: "CLI",
    description: "A small Linear client I actually use.",
    line: "A small Linear client I actually use.",
    tags: ["ai", "cli", "tools"],
    updated: "2026-07-22",
  },
  {
    slug: "github-pr-media",
    name: "github-pr-media",
    href: "https://github.com/padamchopra/automate-github-browser",
    stack: "CLI",
    description:
      "A small CLI that opens a real browser and attaches images or video to a GitHub PR description. GitHub has no API for that.",
    line: "Attach images and video to a GitHub PR.",
    tags: ["ai", "cli", "tools"],
    updated: "2026-06-22",
  },
  {
    slug: "thomas",
    name: "Thomas",
    href: "https://github.com/padamchopra/thomas",
    stack: "Web",
    description:
      "A local-first board for agent work — projects, tickets, worktrees, and what the agents are doing.",
    line: "Local-first board for agent work.",
    tags: ["ai", "tools", "web"],
    updated: "2026-05-14",
  },
  {
    slug: "bento",
    name: "Bento",
    href: "https://github.com/padamchopra/Bento",
    stack: "Android · Compose",
    description:
      "A Jetpack Compose navigation framework with type-safe routes, modals, results, and shared elements, generated at compile time.",
    line: "Type-safe Compose navigation.",
    tags: ["android", "tools"],
    updated: "2026-05-01",
  },
  {
    slug: "habitus",
    name: "Habitus",
    href: "https://github.com/padamchopra/habitus-cross",
    stack: "Flutter",
    description:
      "Build and track habits in 21 days, with a crowd-sourced library so you can steal routines from other people.",
    line: "Habits in 21 days.",
    still: "https://i.ytimg.com/vi/WC_CHbA3rZ8/hqdefault.jpg",
    icon: "/logos/habitus.png",
    tags: ["android", "ios"],
    updated: "2025-07-31",
  },
  {
    slug: "whisperz",
    name: "Whisperz",
    href: "https://github.com/padamchopra/whisperz",
    stack: "Android · iOS",
    description: "A messenger for private chats, shielded, based on Zcash.",
    line: "Private chats, shielded.",
    tags: ["android", "ios"],
    updated: "2025-07-26",
  },
  {
    slug: "shotformatter",
    name: "ShotFormatter",
    href: "https://shotformatter.com/",
    stack: "Web",
    description:
      "A client-side web tool for effects and formatting on video, without uploading anything.",
    line: "Video effects in the browser.",
    tags: ["web", "tools"],
    updated: "2025-07-11",
  },
  {
    slug: "encryptid",
    name: "Encryptid",
    href: "https://github.com/padamchopra/encryptid",
    stack: "Web",
    description: "An online text-based cryptic hunt.",
    line: "A text-based cryptic hunt.",
    tags: ["web", "games"],
    updated: "2022-12-22",
  },
  {
    slug: "biblioteca",
    name: "Biblioteca",
    href: "https://github.com/padamchopra/Biblioteca",
    stack: "Android · Compose",
    description:
      "An add-on that shows a live library of an app’s Compose theme and reusable components.",
    line: "Live Compose theme library.",
    tags: ["android", "tools"],
    updated: "2021-10-31",
  },
  {
    slug: "vm",
    name: "VM",
    href: "https://github.com/padamchopra/vm",
    stack: "C++",
    description: "A small vim-like editor, with commands and macros.",
    line: "A small vim-like editor.",
    tags: ["cli", "tools"],
    updated: "2020-12-15",
  },
  {
    slug: "practikality",
    name: "Practikality",
    href: "https://www.youtube.com/watch?v=VhdyqzMQOGE",
    stack: "Android",
    description:
      "A three-tier Android app to help people who are mute, deaf, or visually impaired communicate. Imagine Cup world finals.",
    line: "App for deaf, blind, and mute communication.",
    still: "https://i.ytimg.com/vi/VhdyqzMQOGE/hqdefault.jpg",
    tags: ["android"],
    updated: "2018-06-01",
  },
]

export const projects: ProjectItem[] = [...items].sort((a, b) =>
  a.updated < b.updated ? 1 : a.updated > b.updated ? -1 : 0,
)
