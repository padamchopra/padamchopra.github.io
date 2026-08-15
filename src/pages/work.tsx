import IcoLink from "@/components/IcoLink"
import Layout from "@/components/Layout"
import { work } from "@/data/work"

export default function WorkPage() {
  return (
    <Layout title="Work" description="Jobs Padam Chopra has taken — mobile, mostly.">
      <section className="v-block">
        <h2>Work</h2>
        <p className="dek">Mobile, mostly. The jobs that took up the days.</p>
        <ol className="v-articles">
          {work.map((job) => (
            <li className="v-article" key={`${job.company}-${job.years}`}>
              <div className="v-article-top">
                <IcoLink href={job.href} size="row">
                  {job.company}
                </IcoLink>
                <span className="v-when">{job.years}</span>
              </div>
              <p className="v-meta">
                {job.role}
                {job.location ? ` · ${job.location}` : ""}
              </p>
              <p>{job.summary}</p>
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  )
}
