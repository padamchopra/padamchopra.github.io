import IcoLink from "@/components/IcoLink"
import Layout from "@/components/Layout"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <Layout title="Projects" description="Things Padam Chopra wanted, so he made them.">
      <section className="v-block">
        <h2>Projects</h2>
        <ul className="v-projects">
          {projects.map((project) => (
            <li key={project.name}>
              <IcoLink href={project.href} icon={project.icon} size="row">
                {project.name}
              </IcoLink>
              <span className="v-role">{project.line}</span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
