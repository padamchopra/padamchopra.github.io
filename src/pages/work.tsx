import IcoLink from "@/components/IcoLink"
import Layout from "@/components/Layout"
import { work } from "@/data/work"

export default function WorkPage() {
  return (
    <Layout title="Work" description="Jobs Padam Chopra has taken — mobile, mostly.">
      <section className="v-block">
        <h2>Work</h2>
        <ol className="v-work">
          {work.map((job) => (
            <li key={`${job.company}-${job.years}`}>
              <div className="v-pos">
                <IcoLink href={job.href} size="row">
                  {job.company}
                </IcoLink>
                <span className="v-role">{job.role}</span>
              </div>
              <span className="v-when">{job.years}</span>
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  )
}
