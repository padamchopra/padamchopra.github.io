import Layout from "@/components/Layout"
import { press } from "@/data/press"

export default function PressPage() {
  const items = [...press].sort((a, b) => b.year.localeCompare(a.year))

  return (
    <Layout title="Press" description="A few things written about Padam Chopra’s work.">
      <section className="v-block">
        <h2>Press</h2>
        <ul className="v-work">
          {items.map((item) => (
            <li key={`${item.source}-${item.title}`}>
              <a className="v-link" href={item.href} target="_blank" rel="noreferrer">
                {item.title}
              </a>
              <span className="v-when">
                {item.source} · {item.year}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
