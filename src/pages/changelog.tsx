import Layout from "@/components/Layout"
import { changelog } from "@/data/changelog"

export default function ChangelogPage() {
  return (
    <Layout
      title="Changelog"
      description="What changed on Padam Chopra’s site."
    >
      <section className="v-block">
        <h2>Changelog</h2>
        <p className="dek">What changed here.</p>
        {changelog.map((entry) => (
          <section className="v-log" key={entry.date}>
            <h3>{entry.date}</h3>
            <ul>
              {entry.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </Layout>
  )
}
