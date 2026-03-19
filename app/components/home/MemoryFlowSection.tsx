export default function MemoryFlowSection() {
  return (
    <section id="memory-flow" className="section">
      <div className="content-shell">
        <div className="reveal">
          <p className="micro-label">Under the Hood</p>
          <h2 className="section-title">How memory flows</h2>
          <p className="section-copy">
            From raw conversation to structured recall — every step automated.
          </p>
        </div>

        <div className="mf-container reveal" style={{ '--reveal-delay': '100ms' } as React.CSSProperties}>
          {/* Left: Layer descriptions */}
          <div className="mf-layers">
            <div className="mf-layer mf-layer-active" data-layer="store">
              <span className="mf-dot mf-dot-gold" />
              <div>
                <span className="mf-layer-label">Ingestion Layer</span>
                <p className="mf-layer-desc">Conversations are buffered and extracted into typed memory blocks.</p>
              </div>
            </div>
            <div className="mf-layer" data-layer="process">
              <span className="mf-dot mf-dot-green" />
              <div>
                <span className="mf-layer-label">Processing Layer</span>
                <p className="mf-layer-desc">Blocks are embedded, deduplicated, linked into the knowledge graph, and encrypted.</p>
              </div>
            </div>
            <div className="mf-layer" data-layer="retrieve">
              <span className="mf-dot mf-dot-blue" />
              <div>
                <span className="mf-layer-label">Retrieval Layer</span>
                <p className="mf-layer-desc">Hybrid search + graph walk + temporal filter builds token-budgeted context.</p>
              </div>
            </div>
          </div>

          {/* Right: Animated pipeline */}
          <div className="mf-pipeline">
            {/* Stage 1: Ingestion */}
            <div className="mf-stage mf-stage-store">
              <div className="mf-stage-header">
                <span className="mf-stage-badge mf-badge-gold">INGEST</span>
              </div>
              <div className="mf-stage-cards">
                <div className="mf-card mf-card-anim" style={{ '--mf-d': '0s' } as React.CSSProperties}>
                  <span className="mf-card-type mf-type-pref">PREFERENCE</span>
                  <span className="mf-card-text">Prefers window seat</span>
                </div>
                <div className="mf-card mf-card-anim" style={{ '--mf-d': '0.4s' } as React.CSSProperties}>
                  <span className="mf-card-type mf-type-fact">FACT</span>
                  <span className="mf-card-text">Works at Acme Corp</span>
                </div>
                <div className="mf-card mf-card-anim" style={{ '--mf-d': '0.8s' } as React.CSSProperties}>
                  <span className="mf-card-type mf-type-event">EVENT</span>
                  <span className="mf-card-text">Deployed v2.0</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="mf-arrow">
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                <path d="M12 0v32M6 26l6 8 6-8" stroke="var(--gold-2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mf-arrow-path" />
              </svg>
            </div>

            {/* Stage 2: Processing */}
            <div className="mf-stage mf-stage-process">
              <div className="mf-stage-header">
                <span className="mf-stage-badge mf-badge-green">PROCESS</span>
              </div>
              <div className="mf-process-grid">
                <div className="mf-proc-item mf-proc-anim" style={{ '--mf-d': '1.2s' } as React.CSSProperties}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                  <span>Embed</span>
                </div>
                <div className="mf-proc-item mf-proc-anim" style={{ '--mf-d': '1.5s' } as React.CSSProperties}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6h0M18 6h0M12 18h0M6 6l12 0M6 6l6 12M18 6l-6 12" /></svg>
                  <span>Graph</span>
                </div>
                <div className="mf-proc-item mf-proc-anim" style={{ '--mf-d': '1.8s' } as React.CSSProperties}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                  <span>Encrypt</span>
                </div>
                <div className="mf-proc-item mf-proc-anim" style={{ '--mf-d': '2.1s' } as React.CSSProperties}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1M8 3h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /></svg>
                  <span>Dedup</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="mf-arrow">
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                <path d="M12 0v32M6 26l6 8 6-8" stroke="var(--gold-2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mf-arrow-path" />
              </svg>
            </div>

            {/* Stage 3: Retrieval */}
            <div className="mf-stage mf-stage-retrieve">
              <div className="mf-stage-header">
                <span className="mf-stage-badge mf-badge-blue">RETRIEVE</span>
              </div>
              <div className="mf-retrieve-flow">
                <div className="mf-ret-step mf-ret-anim" style={{ '--mf-d': '2.6s' } as React.CSSProperties}>
                  <span className="mf-ret-label">Query</span>
                  <span className="mf-ret-val">&quot;flight preferences&quot;</span>
                </div>
                <span className="mf-ret-chevron mf-ret-anim" style={{ '--mf-d': '2.9s' } as React.CSSProperties}>→</span>
                <div className="mf-ret-step mf-ret-anim" style={{ '--mf-d': '3.2s' } as React.CSSProperties}>
                  <span className="mf-ret-label">Hybrid Search</span>
                  <span className="mf-ret-val">FTS + Vector</span>
                </div>
                <span className="mf-ret-chevron mf-ret-anim" style={{ '--mf-d': '3.5s' } as React.CSSProperties}>→</span>
                <div className="mf-ret-step mf-ret-anim" style={{ '--mf-d': '3.8s' } as React.CSSProperties}>
                  <span className="mf-ret-label">Context</span>
                  <span className="mf-ret-val">2000 tokens</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
