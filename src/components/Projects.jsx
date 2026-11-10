import { projects } from '../data/content'
import { ReportMock, BudgetMock, DiaryMock } from './ProjectMocks'
import ScreenshotGallery from './ScreenshotGallery'

const mocks = { report: ReportMock, budget: BudgetMock, diary: DiaryMock }

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => {
            const Mock = mocks[project.mock]
            const hasLink = project.link && project.link !== '#'
            const shots = project.screenshots ?? []
            return (
              <article className="project" key={project.name}>
                <div
                  className={`project-visual project-visual-${project.mock}${shots.length ? ' has-shots' : ''}`}
                >
                  {shots.length ? (
                    <ScreenshotGallery
                      name={project.name}
                      images={shots}
                      variant={project.screenshotStyle}
                    />
                  ) : (
                    Mock && <Mock />
                  )}
                </div>
                <div className="project-body">
                  {project.period && <p className="project-period">{project.period}</p>}
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="tech-tags" aria-label="Built with">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  {hasLink && (
                    <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                      View {project.name}
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
