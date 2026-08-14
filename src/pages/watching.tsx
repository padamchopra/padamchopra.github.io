import Layout from "@/components/Layout"
import { watching } from "@/data/watching"

export default function WatchingPage() {
  return (
    <Layout title="Watching" description="Films and shows Padam Chopra has been watching.">
      <section className="v-block">
        <h2>Watching</h2>
        {watching.length === 0 ? (
          <p className="v-empty">Nothing here yet.</p>
        ) : (
          <ol className="v-work">
            {watching.map((item) => (
              <li key={`${item.title}-${item.watched}`}>
                <div className="v-pos">
                  <span>{item.title}</span>
                  <span className="v-role">{item.kind === "film" ? "Film" : "Show"}</span>
                </div>
                <span className="v-when">{item.year || item.watched}</span>
              </li>
            ))}
          </ol>
        )}
      </section>
    </Layout>
  )
}
