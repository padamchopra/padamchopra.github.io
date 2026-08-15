import Link from "next/link"
import IcoLink from "@/components/IcoLink"
import Layout from "@/components/Layout"
import { projects } from "@/data/projects"
import { work } from "@/data/work"

export default function Home() {
  const current = work[0]

  return (
    <Layout>
      <section className="v-hero">
        <div className="v-prose">
          <p>
            I make software for phones, the web, and the gaps in between —
            products, sites, and tools I wanted for myself. If something should
            exist, I’d rather just build it.
          </p>
          <p>
            These days that’s{" "}
            <IcoLink href={current.href}>{current.company}</IcoLink>, from{" "}
            {current.location}. I work on the mobile app, mostly Android and
            Flutter, close to the product. Before that I did Android at{" "}
            <IcoLink href={work[1].href}>{work[1].company}</IcoLink>,{" "}
            <IcoLink href={work[2].href}>{work[2].company}</IcoLink>,{" "}
            <IcoLink href={work[3].href}>{work[3].company}</IcoLink>, and{" "}
            <IcoLink href={work[4].href}>Ceridian</IcoLink>, and Computer Science
            at <IcoLink href="https://uwaterloo.ca">Waterloo</IcoLink>.
          </p>
          <p>
            Lately, on my own time, I’ve been building the tools around how I
            actually work.{" "}
            <IcoLink href="https://github.com/padamchopra/Sideload">Sideload</IcoLink>{" "}
            is a Mac menu bar that builds and installs Android debug APKs from a
            checkout.{" "}
            <IcoLink href="https://github.com/padamchopra/mission-control">
              Mission Control
            </IcoLink>{" "}
            is an iPhone remote for a fleet of coding sessions on my Mac.{" "}
            <IcoLink href="https://github.com/padamchopra/linear-cli">
              linear-cli
            </IcoLink>{" "}
            is a small Linear client I actually use. Same itch — if I want it, I
            make it.
          </p>
        </div>
      </section>

      <section className="v-block" id="work">
        <h2>
          <Link href="/work">Work</Link>
        </h2>
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

      <section className="v-block" id="projects">
        <h2>
          <Link href="/projects">Projects</Link>
        </h2>
        <ul className="v-projects">
          {projects.map((project) => (
            <li key={project.slug}>
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
