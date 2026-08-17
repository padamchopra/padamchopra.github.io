import Link from "next/link"
import { useRouter } from "next/router"
import Appearance from "@/components/Appearance"
import IcoLink from "@/components/IcoLink"
import Layout from "@/components/Layout"
import NotesSplit from "@/components/NotesSplit"
import { logoFor } from "@/data/logos"
import {
  projectTags,
  projects,
  type ProjectItem,
  type ProjectTag,
} from "@/data/projects"

function tagsFromQuery(raw: string | string[] | undefined): ProjectTag[] {
  const value = Array.isArray(raw) ? raw.join(",") : raw
  if (!value) return []
  return value
    .split(",")
    .filter((tag): tag is ProjectTag =>
      (projectTags as readonly string[]).includes(tag),
    )
}

function hrefFor(slug: string | undefined, tags: ProjectTag[]) {
  const query = tags.length ? `?tags=${tags.join(",")}` : ""
  return slug ? `/projects/${slug}${query}` : `/projects${query}`
}

type CurrentProject = Pick<
  ProjectItem,
  "slug" | "name" | "href" | "stack" | "line" | "tags"
> & {
  icon: string | null
}

export default function ProjectsPage({
  current,
  html,
}: {
  current: CurrentProject | null
  html: string | null
}) {
  const router = useRouter()
  const active = tagsFromQuery(router.query.tags)
  const visible =
    active.length === 0
      ? projects
      : projects.filter((project) =>
          active.some((tag) => project.tags.includes(tag)),
        )

  const toggle = (tag: ProjectTag) => {
    const next = active.includes(tag)
      ? active.filter((item) => item !== tag)
      : [...active, tag]
    void router.replace(hrefFor(current?.slug, next), undefined, {
      scroll: false,
      shallow: true,
    })
  }

  return (
    <Layout
      title={current ? current.name : "Projects"}
      description="Things Padam Chopra wanted, so he made them."
      fill
    >
      <NotesSplit
        hasReader={Boolean(current)}
        storageKey="projects-pane-width"
        resizeLabel="Resize projects"
        list={
          <>
            <header className="v-notes-pane-head">
              <h2>Projects</h2>
              <div className="v-notes-tools">
                <Appearance />
              </div>
            </header>
            <p className="dek">Things I wanted, so I made them.</p>
            <div className="v-filters" role="group" aria-label="Filter by tag">
              {projectTags.map((tag) => {
                const on = active.includes(tag)
                return (
                  <button
                    key={tag}
                    type="button"
                    className={on ? "v-filter is-on" : "v-filter"}
                    aria-pressed={on}
                    onClick={() => toggle(tag)}
                  >
                    {tag}
                  </button>
                )
              })}
            </div>
            {visible.length === 0 ? (
              <p className="v-empty">Nothing with those tags.</p>
            ) : (
              <ol className="v-notes-list v-project-index">
                {visible.map((project) => {
                  const on = current?.slug === project.slug
                  return (
                    <li key={project.slug}>
                      <IcoLink
                        href={hrefFor(project.slug, active)}
                        icon={logoFor(project.href, project.icon)}
                        size="row"
                        scroll={false}
                        className={on ? "is-current" : undefined}
                      >
                        {project.name}
                      </IcoLink>
                      <span className="v-when">{project.line}</span>
                      <div className="v-article-tags">
                        {project.tags.map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            className={
                              active.includes(tag) ? "v-filter is-on" : "v-filter"
                            }
                            aria-pressed={active.includes(tag)}
                            onClick={() => toggle(tag)}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </li>
                  )
                })}
              </ol>
            )}
          </>
        }
        reader={
          current ? (
            <article>
              <p className="v-notes-back">
                <Link href={hrefFor(undefined, active)}>All projects</Link>
              </p>
              <header className="v-note-head">
                <h1>{current.name}</h1>
                <p className="dek">
                  {current.stack}
                  {current.tags.length ? ` · ${current.tags.join(" · ")}` : ""}
                </p>
                <p className="v-project-go">
                  <IcoLink href={current.href} icon={current.icon ?? undefined} size="row">
                    {prettyHost(current.href)}
                  </IcoLink>
                </p>
              </header>
              {html ? (
                <div
                  className="v-note"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              ) : (
                <p className="v-empty">{current.line}</p>
              )}
            </article>
          ) : null
        }
      />
    </Layout>
  )
}

function prettyHost(href: string) {
  try {
    const url = new URL(href)
    if (url.hostname === "github.com") {
      return url.pathname.replace(/^\//, "")
    }
    return url.hostname.replace(/^www\./, "")
  } catch {
    return href
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: [] } },
      ...projects.map((project) => ({ params: { slug: [project.slug] } })),
    ],
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { slug?: string[] } }) {
  const { getProjectHtml } = await import("@/lib/projects")
  const slug = params.slug?.[0]
  const project = slug ? projects.find((item) => item.slug === slug) : undefined
  if (slug && !project) {
    return { notFound: true }
  }
  const html = project ? getProjectHtml(project.slug) : null
  return {
    props: {
      current: project
        ? {
            slug: project.slug,
            name: project.name,
            href: project.href,
            stack: project.stack,
            line: project.line,
            tags: project.tags,
            icon: project.icon ?? null,
          }
        : null,
      html,
    },
  }
}
