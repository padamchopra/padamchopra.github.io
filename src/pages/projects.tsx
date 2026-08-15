import IcoLink from "@/components/IcoLink"
import Layout from "@/components/Layout"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <Layout title="Projects" description="Things Padam Chopra wanted, so he made them.">
      <section className="v-block">
        <h2>Projects</h2>
        <p className="dek">Things I wanted, so I made them.</p>
        <ol className="v-articles">
          {projects.map((project) => (
            <li className="v-article" key={project.slug}>
              <div className="v-article-top">
                <IcoLink href={project.href} icon={project.icon} size="row">
                  {project.name}
                </IcoLink>
                <span className="v-when">{project.stack}</span>
              </div>
              <p>{project.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  )
}
