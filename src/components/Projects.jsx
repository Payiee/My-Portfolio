import { projects } from '../data/content'

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="card-media" aria-hidden="true" />
              <div className="project-card-body">
                <div className="project-card-header">
                  <h3>{project.name}</h3>
                  <span className="project-period">{project.period}</span>
                </div>
                <p>{project.description}</p>
                <ul className="tech-tags">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
