export const site = {
  name: "Padam Chopra",
  description:
    "Padam Chopra makes software for phones, the web, and the gaps in between. Currently Jupiter, based in Dubai.",
  socials: [
    { label: "GitHub", href: "https://github.com/padamchopra" },
    { label: "X", href: "https://x.com/PadamChopra_" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/padamchopra" },
    { label: "Resume", href: "/resume.pdf" },
  ],
}

export const bio = {
  one: "I make software for phones, the web, and the gaps in between — products, sites, and tools I wanted for myself. If something should exist, I’d rather just build it.",
  two: "These days that’s Jupiter, from Dubai. I work on the Android app, native, the backends around it, and the AI setup the team ships with. Before that I did Android at Airchat, theScore, 1Password, Ritual, and Ceridian, and Computer Science at Waterloo.",
  three:
    "Lately, on my own time, I’ve been building the tools around how I actually work: Sideload, Mission Control, a Linear CLI. Same itch — if I want it, I make it.",
}

export const more = [
  { href: "/links", label: "Links", line: "Collections I keep." },
  { href: "/places", label: "Places", line: "Where I’ve been." },
  { href: "/watched", label: "Watched", line: "Shows and films." },
  { href: "/notes", label: "Notes", line: "Stray writing." },
] as const

export const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/links", label: "Links" },
  { href: "/places", label: "Places" },
  { href: "/watched", label: "Watched" },
  { href: "/notes", label: "Notes" },
] as const
