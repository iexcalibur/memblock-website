import type { Metadata } from 'next'
import { CSSProperties } from 'react'

export const metadata: Metadata = {
  title: 'LoCoMo Benchmark | MemBlock',
  description:
    'MemBlock achieves 93% accuracy on the LoCoMo long-conversation memory benchmark.',
}

type BenchRow = {
  category: string
  memblock: number
}

const benchData: BenchRow[] = [
  { category: 'Adversarial', memblock: 100 },
  { category: 'Single-Hop', memblock: 95 },
  { category: 'Open Domain', memblock: 92 },
  { category: 'Temporal', memblock: 90 },
  { category: 'Multi-Hop', memblock: 90 },
  { category: 'Overall', memblock: 93 },
]

const methodology = [
  {
    title: 'Dataset',
    description:
      'LoCoMo — a benchmark of long-form conversational transcripts with 100-200 questions each, designed to test memory systems across factual recall, temporal reasoning, multi-hop inference, open-ended generation, and adversarial detection.',
  },
  {
    title: 'Evaluation',
    description:
      'LLM-as-Judge scoring with Claude Sonnet 4 — the same model answers each question twice: once with the full conversation (baseline) and once with only MemBlock-retrieved context. A judge rates semantic equivalence on a 1-5 scale, measuring pure retrieval quality.',
  },
  {
    title: 'Scoring',
    description:
      'Unlike token-level F1, LLM-as-Judge evaluates meaning, not wording. "Six months" and "January to June 2023" score identically. This reflects real-world usage where the answer\'s correctness matters, not its exact phrasing.',
  },
]

function HorizontalBar({ row }: { row: BenchRow }) {
  const width = `${row.memblock}%`
  return (
    <div className="hb-row">
      <span className="hb-label">{row.category}</span>
      <div className="hb-track">
        <div
          className="hb-fill"
          style={{ width, '--bar-width': width } as CSSProperties}
        />
      </div>
      <span className="hb-val">{row.memblock}%</span>
    </div>
  )
}

export default function BenchmarkPage() {
  return (
    <div className="page">
      <header className="top-nav">
        <div className="content-shell nav-shell">
          <a href="/" className="brand" aria-label="Memblock home">
            memblock
          </a>
          <nav className="primary-nav" aria-label="Benchmark navigation">
            <a href="#results" className="nav-link">RESULTS</a>
            <a href="#details" className="nav-link">DETAILS</a>
            <a href="#methodology" className="nav-link">METHODOLOGY</a>
          </nav>
          <div className="nav-right">
            <a href="/" className="outline-pill nav-pill">
              HOME
            </a>
          </div>
        </div>
      </header>

      <main className="docs-main">
        <div className="content-shell">
          {/* Hero — same pattern as docs */}
          <div className="docs-hero">
            <p className="micro-label">[ LoCoMo Benchmark ]</p>
            <h1
              className="hero-title"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              MemBlock Benchmark Results
            </h1>
            <p className="section-copy">
              93% overall accuracy on the LoCoMo long-conversation memory dataset,
              with 100% adversarial detection, 95% single-hop, and 92% open-domain.
            </p>
          </div>

          {/* Score highlights */}
          <div className="bm-highlights">
            {benchData.map((row) => (
              <div key={row.category} className="bm-highlight-card">
                <span className="bm-highlight-value">
                  {row.memblock}
                  <span className="bm-highlight-pct">%</span>
                </span>
                <span className="bm-highlight-label">{row.category}</span>
              </div>
            ))}
          </div>

          {/* What is LoCoMo */}
          <section className="docs-section">
            <h2 className="docs-section-title">What is the LoCoMo Benchmark?</h2>
            <div className="card-grid">
              <article className="surface-card reveal" style={{ '--reveal-delay': '0ms' } as CSSProperties}>
                <div className="card-head">
                  <span className="line-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                </div>
                <h3 className="card-title">Long Conversations</h3>
                <p className="card-copy">
                  LoCoMo tests memory systems on 50+ real-world conversational transcripts — each spanning thousands of turns — to evaluate how well systems retain and recall information over time.
                </p>
              </article>
              <article className="surface-card reveal" style={{ '--reveal-delay': '70ms' } as CSSProperties}>
                <div className="card-head">
                  <span className="line-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h4v4H4zM16 4h4v4h-4zM10 16h4v4h-4zM8 6h8M6 8v6l4 2M18 8v6l-4 2" />
                    </svg>
                  </span>
                </div>
                <h3 className="card-title">Five Reasoning Categories</h3>
                <p className="card-copy">
                  Questions span single-hop factual recall, multi-hop inference across conversations, temporal ordering, open-domain generation, and adversarial unanswerable queries.
                </p>
              </article>
              <article className="surface-card reveal" style={{ '--reveal-delay': '140ms' } as CSSProperties}>
                <div className="card-head">
                  <span className="line-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20V10M18 20V4M6 20v-4" />
                    </svg>
                  </span>
                </div>
                <h3 className="card-title">Industry Standard</h3>
                <p className="card-copy">
                  Published at ACL 2024, LoCoMo is the standard benchmark for evaluating long-term memory in conversational AI systems. We use LLM-as-Judge scoring for semantic evaluation.
                </p>
              </article>
            </div>
          </section>

          {/* Horizontal bar chart */}
          <section id="results" className="docs-section">
            <h2 className="docs-section-title">Results by Category</h2>
            <p className="docs-section-desc" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              LLM-as-Judge accuracy (%) — how well MemBlock-retrieved context matches full-conversation answers.
            </p>

            <div className="hb-chart">
              {benchData.map((row, i) => (
                <div key={row.category} className="reveal" style={{ '--reveal-delay': `${i * 60}ms` } as CSSProperties}>
                  <HorizontalBar row={row} />
                </div>
              ))}
            </div>
          </section>

          {/* Performance metrics */}
          <section className="docs-section">
            <h2 className="docs-section-title">Performance</h2>
            <p className="docs-section-desc" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Measured with Claude Sonnet 4 on the LoCoMo benchmark. MemBlock retrieves only what matters — fewer tokens, faster responses, same accuracy.
            </p>
            <div className="perf-grid">
              <div className="perf-card reveal" style={{ '--reveal-delay': '0ms' } as CSSProperties}>
                <span className="perf-value">~2K</span>
                <span className="perf-label">Avg tokens per prompt</span>
                <span className="perf-detail">vs 18K+ for full-context</span>
              </div>
              <div className="perf-card reveal" style={{ '--reveal-delay': '70ms' } as CSSProperties}>
                <span className="perf-value">1.2s</span>
                <span className="perf-label">p95 end-to-end latency</span>
                <span className="perf-detail">retrieval + LLM response</span>
              </div>
              <div className="perf-card reveal" style={{ '--reveal-delay': '140ms' } as CSSProperties}>
                <span className="perf-value">85%</span>
                <span className="perf-label">Token savings</span>
                <span className="perf-detail">vs stuffing full conversation</span>
              </div>
            </div>
          </section>

          {/* Results table */}
          <section id="details" className="docs-section">
            <h2 className="docs-section-title">Detailed Results</h2>
            <div className="bm-table-wrap">
              <table className="bm-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th className="bm-th-ours">MemBlock</th>
                  </tr>
                </thead>
                <tbody>
                  {benchData.map((row) => (
                    <tr key={row.category}>
                      <td className="bm-td-cat">{row.category}</td>
                      <td className="bm-td-ours bm-td-best">{row.memblock}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Methodology */}
          <section id="methodology" className="docs-section">
            <h2 className="docs-section-title">Methodology</h2>
            <div className="card-grid">
              {methodology.map((m, i) => (
                <article
                  key={m.title}
                  className="surface-card reveal"
                  style={{ '--reveal-delay': `${i * 70}ms` } as CSSProperties}
                >
                  <div className="card-head">
                    <span className="line-icon">
                      {m.title === 'Dataset' && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 7V4h16v3M9 20h6M12 4v16" />
                        </svg>
                      )}
                      {m.title === 'Evaluation' && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 12l2 2 4-4M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                        </svg>
                      )}
                      {m.title === 'Scoring' && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                      )}
                    </span>
                  </div>
                  <h3 className="card-title">{m.title}</h3>
                  <p className="card-copy">{m.description}</p>
                </article>
              ))}
            </div>
          </section>


        </div>
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
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Developers</h3>
              <ul className="footer-links">
                <li><a href="/docs">Documentation</a></li>
                <li><a href="https://pypi.org/project/memblock/" target="_blank" rel="noopener noreferrer">PyPI</a></li>
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
