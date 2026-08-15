import Layout from "@/components/Layout"
import { recommendations, seen, watchingNow, type WatchItem } from "@/data/watching"

function WatchList({ items, empty }: { items: WatchItem[]; empty: string }) {
  if (items.length === 0) {
    return <p className="v-empty">{empty}</p>
  }

  return (
    <ol className="v-articles">
      {items.map((item) => (
        <li className="v-article" key={item.title}>
          <div className="v-article-top">
            <span>{item.title}</span>
            <span className="v-when">{item.year || (item.kind === "film" ? "Film" : "Show")}</span>
          </div>
          {item.year ? <p className="v-meta">{item.kind === "film" ? "Film" : "Show"}</p> : null}
          {item.note ? <p>{item.note}</p> : null}
        </li>
      ))}
    </ol>
  )
}

export default function WatchedPage() {
  return (
    <Layout
      title="Watched"
      description="Shows and films Padam Chopra is watching, recommends, and has seen."
    >
      <section className="v-block">
        <h2>Currently watching</h2>
        <p className="dek">What’s on.</p>
        <WatchList items={watchingNow} empty="Nothing in progress." />
      </section>
      <section className="v-block">
        <h2>Recommendations</h2>
        <p className="dek">If you ask me what to watch.</p>
        <WatchList items={recommendations} empty="Nothing here yet." />
      </section>
      <section className="v-block">
        <h2>Seen</h2>
        <p className="dek">Not recs. Just things I’ve watched.</p>
        <WatchList items={seen} empty="Nothing here yet." />
      </section>
    </Layout>
  )
}
