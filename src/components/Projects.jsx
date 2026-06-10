import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-wrap">
        <div className="section-header reveal">
          <span className="section-num">04</span>
          <h2 className="section-title">
            Selected <span className="dim">Projects</span>
          </h2>
        </div>
        <div className="projects-list">
          {projects.map(proj =>
            proj.isWork ? (
              <div
                key={proj.num}
                className="project-item reveal"
                style={{ cursor: 'default' }}
                onClick={() => window.open('https://github.com/abhishekpal-dev', '_blank')}
              >
                <span className="project-num">{proj.num}</span>
                <div className="project-info">
                  <div className="project-name">
                    {proj.name}
                    <span
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--accent)',
                        background: 'var(--accent-dim)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        marginLeft: '0.5rem',
                        verticalAlign: 'middle',
                      }}
                    >
                      WORK
                    </span>
                  </div>
                  <div className="project-desc">{proj.desc}</div>
                  <div className="timeline-tags" style={{ marginTop: '0.5rem' }}>
                    {proj.tags.map(tag => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="project-arrow" style={{ color: 'var(--accent)' }}>↗</span>
              </div>
            ) : (
              <a
                key={proj.num}
                href={proj.url}
                target="_blank"
                rel="noreferrer"
                className="project-item reveal"
              >
                <span className="project-num">{proj.num}</span>
                <div className="project-info">
                  <div className="project-name">{proj.name}</div>
                  <div className="project-desc">{proj.desc}</div>
                  <div className="timeline-tags" style={{ marginTop: '0.5rem' }}>
                    {proj.tags.map(tag => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="project-arrow">↗</span>
              </a>
            )
          )}
        </div>
        <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a
            href="https://github.com/abhishekpal-dev"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            View All on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
