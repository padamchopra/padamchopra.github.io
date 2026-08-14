export type ProjectItem = {
  name: string
  href: string
  year?: string
  stack: string
  description: string
  line: string
  still?: string
  icon?: string
}

export const projects: ProjectItem[] = [
  {
    name: "Sideload",
    href: "https://github.com/padamchopra/Sideload",
    stack: "macOS",
    description:
      "A Mac menu bar that builds and installs Android debug APKs from a git checkout or local worktree.",
    line: "Menu bar that sideloads Android debug APKs.",
  },
  {
    name: "Mission Control",
    href: "https://github.com/padamchopra/mission-control",
    stack: "iOS",
    description: "An iPhone remote for a fleet of coding sessions on my Mac.",
    line: "iPhone remote for coding sessions on my Mac.",
  },
  {
    name: "linear-cli",
    href: "https://github.com/padamchopra/linear-cli",
    stack: "CLI",
    description: "A small Linear client I actually use.",
    line: "A small Linear client I actually use.",
  },
  {
    name: "Habitus",
    href: "https://github.com/padamchopra/habitus-cross",
    stack: "Flutter",
    description:
      "Build and track habits in 21 days, with a crowd-sourced library so you can steal routines from other people.",
    line: "Habits in 21 days.",
    still: "https://i.ytimg.com/vi/WC_CHbA3rZ8/hqdefault.jpg",
    icon: "/logos/habitus.png",
  },
  {
    name: "Practikality",
    href: "https://www.youtube.com/watch?v=VhdyqzMQOGE",
    stack: "Android",
    description:
      "A three-tier Android app to help people who are mute, deaf, or visually impaired communicate. Imagine Cup world finals.",
    line: "App for deaf, blind, and mute communication.",
    still: "https://i.ytimg.com/vi/VhdyqzMQOGE/hqdefault.jpg",
  },
  {
    name: "Biblioteca",
    href: "https://github.com/padamchopra/Biblioteca",
    stack: "Android · Compose",
    description:
      "An add-on that shows a live library of an app’s Compose theme and reusable components.",
    line: "Live Compose theme library.",
  },
  {
    name: "VM",
    href: "https://github.com/padamchopra/vm",
    stack: "C++",
    description: "A small vim-like editor, with commands and macros.",
    line: "A small vim-like editor.",
  },
]
