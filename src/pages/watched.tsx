import Layout from "@/components/Layout"
import { favorites, watchingNow, type WatchItem } from "@/data/watching"

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
      description="Shows and films Padam Chopra is watching, and the ones that stuck."
    >
      <section className="v-block">
        <h2>Now</h2>
        <p className="dek">What’s on, lately.</p>
        <WatchList items={watchingNow} empty="Nothing in progress." />
      </section>
      <section className="v-block">
        <h2>Favorites</h2>
        <p className="dek">The ones that stuck.</p>
        <WatchList items={favorites} empty="Nothing here yet." />
      </section>
    </Layout>
  )
}
