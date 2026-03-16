export default function WorkflowSection() {
  return (
    <section id="workflow" className="section">
      <div className="content-shell">
        <div className="reveal">
          <p className="micro-label">How It Works</p>
          <h2 className="section-title">Memory that follows your users.</h2>
          <p className="section-copy">
            No external services. Everything runs on your machine.
          </p>
        </div>

        <div className="wf-container reveal" style={{ '--reveal-delay': '100ms' } as React.CSSProperties}>
          {/* Chat column */}
          <div className="wf-chat">
            <div className="wf-chat-header">
              <span className="wf-dot wf-dot-green" />
              <span className="wf-chat-title">Agent Chat</span>
            </div>

            {/* Phase 1: User sends preference */}
            <div className="wf-bubble wf-user wf-anim" data-step="0">
              I prefer aisle seats when flying. But for long flights, make that a window seat.
            </div>

            {/* Typing indicator */}
            <div className="wf-typing wf-anim" data-step="t1">
              <span /><span /><span />
            </div>

            {/* Agent responds */}
            <div className="wf-bubble wf-agent wf-anim" data-step="2">
              Noted. Aisle seats by default, window seats for long flights — all set.
            </div>

            {/* Time divider */}
            <div className="wf-divider wf-anim" data-step="5">
              <span className="wf-divider-line" />
              <span className="wf-divider-text">2 weeks later</span>
              <span className="wf-divider-line" />
            </div>

            {/* Phase 2: New query */}
            <div className="wf-bubble wf-user wf-anim" data-step="6">
              Can you book my flight to Berlin next Tuesday? It&rsquo;s a long one.
            </div>

            {/* Typing indicator */}
            <div className="wf-typing wf-anim" data-step="t7">
              <span /><span /><span />
            </div>

            {/* Agent responds with memory-aware answer */}
            <div className="wf-bubble wf-agent wf-anim" data-step="8">
              Booking it now — window seat as per your preferences.
            </div>
          </div>

          {/* Memory column */}
          <div className="wf-memory">
            <div className="wf-memory-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L4 7v6c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12V7l-8-5z" />
              </svg>
              <span>Memory Store</span>
            </div>

            {/* Empty state */}
            <div className="wf-mem-empty wf-anim" data-step="e0">
              <p>No memories yet</p>
            </div>

            {/* Memories appear after agent responds */}
            <div className="wf-mem-card wf-anim" data-step="3">
              <div className="wf-mem-row">
                <span className="wf-mem-type">PREFERENCE</span>
                <span className="wf-mem-conf">1.00</span>
              </div>
              <p className="wf-mem-text">Prefers aisle seats for flights</p>
            </div>

            <div className="wf-mem-card wf-anim" data-step="4">
              <div className="wf-mem-row">
                <span className="wf-mem-type">PREFERENCE</span>
                <span className="wf-mem-conf">1.00</span>
              </div>
              <p className="wf-mem-text">Prefers window seat for long flights</p>
            </div>

            {/* Retrieval highlight */}
            <div className="wf-mem-search wf-anim" data-step="7">
              <div className="wf-mem-search-bar">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span>searching: &quot;long flight preferences&quot;</span>
              </div>
            </div>

            <div className="wf-mem-card wf-mem-recalled wf-anim" data-step="8">
              <div className="wf-mem-row">
                <span className="wf-mem-type">PREFERENCE</span>
                <span className="wf-mem-conf wf-recalled-badge">recalled</span>
              </div>
              <p className="wf-mem-text">Prefers window seat for long flights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
