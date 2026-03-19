import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | MemBlock',
  description: 'The vision behind MemBlock — independent, local-first AI memory infrastructure.',
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <header className="top-nav">
        <div className="content-shell nav-shell">
          <a href="/" className="brand" aria-label="MemBlock home">
            memblock
          </a>
          <div className="nav-right">
            <a href="/" className="outline-pill nav-pill">
              HOME
            </a>
          </div>
        </div>
      </header>

      <main className="about-main">
        <section className="about-hero">
          <p className="micro-label">[ ABOUT ]</p>
          <h1 className="about-title">Built by a developer, for developers.</h1>
        </section>

        <section className="about-section">
          <h2 className="about-heading">The Vision</h2>
          <p className="about-text">
            AI agents are getting smarter — but they still forget everything between conversations.
            Most memory solutions are cloud-hosted, vendor-locked, or treat memory as unstructured text dumps.
          </p>
          <p className="about-text">
            MemBlock exists because agents deserve real memory. Typed, structured, queryable, encrypted —
            memory that lives on your machine and runs without external dependencies.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-heading">Independent by Design</h2>
          <p className="about-text">
            MemBlock is built and maintained by a solo developer. No venture capital, no sponsors,
            no advisory boards. Every decision is driven by what makes the SDK better —
            not what makes investors happy.
          </p>
          <p className="about-text">
            This is a closed-source, commercially distributed product. The code is proprietary
            because quality infrastructure deserves sustainable business models.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-heading">Local-First, Always</h2>
          <p className="about-text">
            No data leaves your machine. No API keys required. No cloud sync.
            MemBlock runs entirely on local storage — SQLite by default, PostgreSQL when you need scale.
          </p>
          <p className="about-text">
            Your users' memories are their own. Per-block encryption, tamper detection,
            and session scoping are built in — not bolted on.
          </p>
        </section>

      </main>

      <footer id="company" className="mega-footer">
        <div className="footer-glow" />
        <div className="content-shell">
          <div className="footer-grid">
            <div>
              <h3 className="footer-title">Platform</h3>
              <ul className="footer-links">
                <li><a href="/#workflow">How It Works</a></li>
                <li><a href="/#features">Features</a></li>
                <li><a href="/benchmark">Benchmark</a></li>
                <li><a href="/docs">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Developers</h3>
              <ul className="footer-links">
                <li><a href="/docs">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Company</h3>
              <ul className="footer-links">
                <li><a href="/about">About</a></li>
              </ul>
            </div>
          </div>
          <p className="footer-note">&copy; 2026 MemBlock. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
