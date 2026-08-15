export type WatchItem = {
  title: string
  year?: string
  kind: "film" | "show"
  note?: string
}

export const watchingNow: WatchItem[] = []

export const favorites: WatchItem[] = []
