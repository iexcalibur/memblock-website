export default function BlockBuilderSection() {
  return (
    <section id="block-builder" className="section section-alt">
      <div className="content-shell">
        <p className="micro-label reveal" style={{ '--reveal-delay': '0ms' } as React.CSSProperties}>
          [ HOW MEMORY GETS STRUCTURED ]
        </p>
        <h2 className="section-title reveal" style={{ '--reveal-delay': '80ms' } as React.CSSProperties}>
          From conversation to knowledge.
        </h2>
        <p className="section-copy reveal" style={{ '--reveal-delay': '160ms' } as React.CSSProperties}>
          MemBlock extracts structured memory blocks from raw conversations — typed, scored, encrypted, and connected.
        </p>

        <div className="bb-stage reveal" style={{ '--reveal-delay': '240ms' } as React.CSSProperties}>
          {/* ── Source sentence ── */}
          <div className="bb-sentence bb-anim" data-phase="sentence">
            <span className="bb-sentence-label">User said:</span>
            <p className="bb-sentence-text">
              &ldquo;I{' '}
              <span className="bb-hl bb-hl-pref bb-anim" data-phase="hl-pref">prefer Python</span>
              , work at{' '}
              <span className="bb-hl bb-hl-fact bb-anim" data-phase="hl-fact">Acme Corp</span>
              {' '}since{' '}
              <span className="bb-hl bb-hl-event bb-anim" data-phase="hl-event">2024</span>
              , and deploy on AWS.&rdquo;
            </p>
          </div>

          {/* ── Arrow indicators ── */}
          <div className="bb-arrows bb-anim" data-phase="arrows">
            <svg viewBox="0 0 360 32" className="bb-arrows-svg" aria-hidden="true">
              <path d="M60 4 L60 28" className="bb-arrow-line bb-arrow-pref" />
              <path d="M180 4 L180 28" className="bb-arrow-line bb-arrow-fact" />
              <path d="M300 4 L300 28" className="bb-arrow-line bb-arrow-event" />
            </svg>
          </div>

          {/* ── Block cards grid ── */}
          <div className="bb-grid">
            <div className="bb-block bb-block-pref bb-anim" data-phase="block-pref">
              <div className="bb-block-head">
                <span className="bb-type-badge bb-badge-pref">PREFERENCE</span>
                <span className="bb-conf">0.92</span>
              </div>
              <p className="bb-block-content">Prefers Python</p>
              <div className="bb-block-foot">
                <span className="bb-lock-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </span>
                <span className="bb-encrypted-label">encrypted</span>
              </div>
            </div>

            <div className="bb-block bb-block-fact bb-anim" data-phase="block-fact">
              <div className="bb-block-head">
                <span className="bb-type-badge bb-badge-fact">FACT</span>
                <span className="bb-conf">0.95</span>
              </div>
              <p className="bb-block-content">Works at Acme Corp</p>
              <div className="bb-block-foot">
                <span className="bb-lock-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </span>
                <span className="bb-encrypted-label">encrypted</span>
              </div>
            </div>

            <div className="bb-block bb-block-event bb-anim" data-phase="block-event">
              <div className="bb-block-head">
                <span className="bb-type-badge bb-badge-event">EVENT</span>
                <span className="bb-conf">0.88</span>
              </div>
              <p className="bb-block-content">Since 2024</p>
              <div className="bb-block-foot">
                <span className="bb-lock-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </span>
                <span className="bb-encrypted-label">encrypted</span>
              </div>
            </div>
          </div>

          {/* ── Graph edges (SVG overlay) ── */}
          <svg className="bb-edges bb-anim" data-phase="edges" viewBox="0 0 360 40" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <line x1="80" y1="20" x2="160" y2="20" className="bb-edge bb-edge-1" />
            <text x="120" y="14" className="bb-edge-label">related_to</text>
            <line x1="200" y1="20" x2="280" y2="20" className="bb-edge bb-edge-2" />
            <text x="240" y="14" className="bb-edge-label">caused_by</text>
          </svg>
        </div>
      </div>
    </section>
  )
}
