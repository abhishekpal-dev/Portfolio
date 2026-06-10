export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-eyebrow">
        <span className="hero-dot" />
        Available for opportunities
      </div>
      <h1 className="hero-name">
        ABHISHEK
        <br />
        <span className="outline">PAL</span>
      </h1>
      <p className="hero-role">
        <em>Software Developer</em> &amp; <em>AI Engineer</em>
      </p>
      <p className="hero-desc">
        Building distributed systems and AI-powered tools at Mphasis. DTU EE graduate with a passion
        for backend architecture, Kafka, Playwright automation, and AWS Bedrock AI tooling.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn-primary">
          View Work
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#contact" className="btn-outline">Get in Touch</a>
        <a href="/Abhishek_Pal_Software_Developer_Resume.pdf" className="btn-outline" download>
          ↓ Resume
        </a>
      </div>

      <div className="hero-stats">
        <div>
          <div className="stat-num">800+</div>
          <div className="stat-label">LeetCode Solved</div>
        </div>
        <div>
          <div className="stat-num">17</div>
          <div className="stat-label">GitHub Repos</div>
        </div>
        <div>
          <div className="stat-num">1+</div>
          <div className="stat-label">Years at Mphasis</div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  )
}
