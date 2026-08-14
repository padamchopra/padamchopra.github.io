export type WatchEntry = {
  title: string
  year?: string
  kind: "film" | "show"
  watched: string
  note?: string
}

// Add films and shows here. Newest first.
export const watching: WatchEntry[] = []
