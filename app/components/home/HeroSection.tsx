export default function HeroSection() {
  return (
    <section id="frontier" className="hero">
      <div className="hero-atmosphere" />
      <div className="hero-spotlight" />
      <div className="hero-vignette" />

      <div className="content-shell hero-shell">
        <p className="micro-label">[ STRUCTURED MEMORY SDK FOR AI AGENTS ]</p>
        <h1 className="hero-title">Memory that agents can actually reason over.</h1>
        <p className="hero-copy">
          Give your AI agents persistent, structured memory they can store, query, and build context
          from — without external infrastructure or per-call LLM costs.
        </p>

        <a href="#quickstart" className="outline-pill announce-pill">
          <span className="announce-dot" />
          V0.4.0 — NOW AVAILABLE
        </a>
      </div>

      <a href="/docs" className="outline-pill doc-pill">
        DOCUMENTATION
      </a>
      <a href="#workflow" className="down-cue" aria-label="Scroll down">
        ↓
      </a>
    </section>
  )
}
