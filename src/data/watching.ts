export type WatchItem = {
  title: string
  year?: string
  kind: "film" | "show"
  note?: string
}

export const watchingNow: WatchItem[] = []

export const recommendations: WatchItem[] = []

export const seen: WatchItem[] = []
