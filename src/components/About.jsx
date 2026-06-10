export default function About() {
  return (
    <section id="about">
      <div className="section-wrap">
        <div className="section-header reveal">
          <span className="section-num">01</span>
          <h2 className="section-title">
            About <span className="dim">Me</span>
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              Hi! I'm <strong>Abhishek Pal</strong>, a Software Developer at{' '}
              <strong>Mphasis Limited</strong> in Bangalore. I'm a DTU Electrical Engineering
              graduate who went deep into CS — and never looked back.
            </p>
            <p>
              My day-to-day involves building{' '}
              <strong>distributed browser automation systems</strong>, Kafka-backed job queues,
              Playwright &amp; Docker infrastructure, and <strong>AWS Bedrock</strong>-based AI
              tooling. I'm passionate about systems that scale.
            </p>
            <p>
              I'm actively targeting a transition into product-based companies — Cashfree, Licious,
              and other high-growth teams where engineering really matters.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎓</div>
                <div className="highlight-text">
                  <strong>B.Tech, Electrical Engineering</strong>
                  Delhi Technological University (DTU)
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🏢</div>
                <div className="highlight-text">
                  <strong>Software Developer — Mphasis Limited</strong>
                  Bangalore, India
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-text">
                  <strong>Target: Product Companies</strong>
                  SDE-2 / Mid-level Distributed Systems roles · 15+ LPA
                </div>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: '0.15s' }}>
            <div className="certifications">
              <div className="cert-title">Certifications</div>
              <div className="cert-list">
                <div className="cert-item">
                  🤖 Anthropic Claude 101
                  <span className="cert-badge">Verified</span>
                </div>
                <div className="cert-item">
                  ☁️ AWS Fundamentals
                  <span className="cert-badge">Cloud</span>
                </div>
                <div className="cert-item">
                  📊 DSA — Striver's A2Z Sheet
                  <span className="cert-badge">In Progress</span>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
              }}
            >
              <div className="cert-title">Currently Learning</div>
              <div
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem' }}
              >
                <span className="tag" style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>
                  LLD / HLD Design
                </span>
                <span className="tag">SOLID Principles</span>
                <span className="tag">Design Patterns</span>
                <span className="tag">System Design</span>
                <span className="tag">Kafka Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
