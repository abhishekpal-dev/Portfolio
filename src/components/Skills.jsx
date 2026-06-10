import { skillCategories } from '../data'

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap">
        <div className="section-header reveal">
          <span className="section-num">02</span>
          <h2 className="section-title">
            Tech <span className="dim">Stack</span>
          </h2>
        </div>
        {skillCategories.map(cat => (
          <div className="skills-category reveal" key={cat.label}>
            <div className="cat-label">{cat.label}</div>
            <div className="skills-grid">
              {cat.skills.map(skill => (
                <div className="skill-chip" key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
