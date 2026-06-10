export default function Contact() {
  return (
    <section id="contact">
      <div className="section-wrap">
        <div className="section-header reveal">
          <span className="section-num">05</span>
          <h2 className="section-title">
            Let's <span className="dim">Connect</span>
          </h2>
        </div>
        <div className="contact-grid">
          <div className="reveal">
            <div className="contact-big">
              Have a role
              <br />
              or idea? <span>Talk.</span>
            </div>
            <p className="contact-sub">
              I'm actively looking for SDE-1/SDE-2 roles at product-based companies. Open to
              referrals, collaborations, and interesting distributed systems problems.
            </p>
            <a
              href="/Abhishek_Pal_Software_Developer_Resume.pdf"
              className="btn-primary"
              download
              style={{ display: 'inline-flex', width: 'auto' }}
            >
              ↓ Download Resume
            </a>
          </div>
          <div className="contact-links reveal" style={{ animationDelay: '0.15s' }}>
            <a href="mailto:apal96339@gmail.com" className="contact-link">
              <div className="cl-icon">📧</div>
              Email Me
              <span className="cl-arrow">↗</span>
            </a>
            <a
              href="https://linkedin.com/in/abhishekpal-dev"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="cl-icon">💼</div>
              LinkedIn — abhishekpal-dev
              <span className="cl-arrow">↗</span>
            </a>
            <a
              href="https://github.com/abhishekpal-dev"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="cl-icon">🐙</div>
              GitHub — abhishekpal-dev
              <span className="cl-arrow">↗</span>
            </a>
            <div className="contact-link" style={{ cursor: 'default', opacity: 0.7 }}>
              <div className="cl-icon">📍</div>
              Bangalore, India
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
