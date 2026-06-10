import { experiences } from '../data'

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-wrap">
        <div className="section-header reveal">
          <span className="section-num">03</span>
          <h2 className="section-title">
            Experience <span className="dim">&amp; Work</span>
          </h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div
                className="timeline-dot"
                style={exp.accentDot ? { borderColor: 'var(--accent)' } : undefined}
              />
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-company">{exp.company}</div>
              <p className="timeline-desc">{exp.description}</p>
              <div className="timeline-tags">
                {exp.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
