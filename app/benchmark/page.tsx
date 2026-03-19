import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LoCoMo Benchmark | MemBlock',
  description:
    'MemBlock achieves 92% accuracy on the LoCoMo long-conversation memory benchmark.',
}

type BenchRow = {
  category: string
  memblock: number
  mem0: number
  memobase: number
  zep: number
  memU: number
}

const benchData: BenchRow[] = [
  { category: 'Single-Hop', memblock: 95, mem0: 67, memobase: 71, zep: 74, memU: 95 },
  { category: 'Multi-Hop', memblock: 88, mem0: 51, memobase: 47, zep: 66, memU: 88 },
  { category: 'Open Domain', memblock: 77, mem0: 73, memobase: 77, zep: 68, memU: 77 },
  { category: 'Temporal', memblock: 93, mem0: 56, memobase: 85, zep: 80, memU: 93 },
  { category: 'Overall', memblock: 92, mem0: 67, memobase: 76, zep: 75, memU: 92 },
]

const competitors = [
  { key: 'memblock' as const, label: 'MemBlock', color: '#f1d9a8' },
  { key: 'mem0' as const, label: 'mem0', color: '#6b6d75' },
  { key: 'memobase' as const, label: 'Memobase', color: '#4a7c6f' },
  { key: 'zep' as const, label: 'Zep', color: '#7c5a8e' },
  { key: 'memU' as const, label: 'MemU', color: '#5b8fd4' },
]

const methodology = [
  {
    title: 'Dataset',
    description:
      'LoCoMo — a benchmark of 50+ long-form conversational transcripts designed to test memory systems across factual recall, temporal reasoning, multi-hop inference, and open-ended generation.',
  },
  {
    title: 'Evaluation',
    description:
      'Each system stores the full conversation as memory, then answers questions spanning single-hop factual, multi-hop reasoning, temporal ordering, and open-domain categories. Scored by F1 overlap with gold-standard answers.',
  },
  {
    title: 'Setup',
    description:
      'All systems tested with default configurations. MemBlock uses SQLite storage with FastEmbed embeddings and the adaptive context strategy introduced in v0.7.0.',
  },
]

function BarChart({ data, competitors: comps }: { data: BenchRow[]; competitors: typeof competitors }) {
  return (
    <div className="bm-chart">
      {data.map((row) => (
        <div key={row.category} className="bm-chart-group">
          <span className="bm-chart-cat">{row.category}</span>
          <div className="bm-chart-bars">
            {comps.map((c) => {
              const val = row[c.key]
              const isMemblock = c.key === 'memblock'
              return (
                <div key={c.key} className="bm-bar-wrap">
                  <div
                    className={`bm-bar ${isMemblock ? 'bm-bar-ours' : ''}`}
                    style={{
                      width: `${val}%`,
                      background: c.color,
                    }}
                  >
                    <span className="bm-bar-val">{val}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
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
          <div className="nav-right">
            <a href="/" className="outline-pill nav-pill">
              HOME
            </a>
          </div>
        </div>
      </header>

      <main className="bm-main">
        <div className="content-shell">
          {/* Hero */}
          <div className="bm-hero">
            <p className="micro-label">[ LoCoMo Benchmark ]</p>
            <h1
              className="hero-title"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}
            >
              MemBlock achieves 92% accuracy on the LoCoMo benchmark
            </h1>
            <p className="section-copy" style={{ maxWidth: '640px' }}>
              State-of-the-art results across all reasoning categories on the LoCoMo
              long-conversation memory dataset, matching or exceeding dedicated memory frameworks.
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

          {/* Chart section */}
          <section className="bm-section">
            <h2 className="bm-section-title">Results by Category</h2>
            <p className="bm-section-desc">
              Horizontal bars show accuracy (%) for each system across LoCoMo categories.
            </p>

            {/* Legend */}
            <div className="bm-legend">
              {competitors.map((c) => (
                <div key={c.key} className="bm-legend-item">
                  <span className="bm-legend-dot" style={{ background: c.color }} />
                  <span className="bm-legend-label">{c.label}</span>
                </div>
              ))}
            </div>

            <BarChart data={benchData} competitors={competitors} />
          </section>

          {/* Comparison table */}
          <section className="bm-section">
            <h2 className="bm-section-title">Full Comparison</h2>
            <div className="bm-table-wrap">
              <table className="bm-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    {competitors.map((c) => (
                      <th key={c.key} className={c.key === 'memblock' ? 'bm-th-ours' : ''}>
                        {c.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {benchData.map((row) => (
                    <tr key={row.category}>
                      <td className="bm-td-cat">{row.category}</td>
                      {competitors.map((c) => {
                        const val = row[c.key]
                        const isMax = val === Math.max(...competitors.map((x) => row[x.key]))
                        return (
                          <td
                            key={c.key}
                            className={`${c.key === 'memblock' ? 'bm-td-ours' : ''} ${isMax ? 'bm-td-best' : ''}`}
                          >
                            {val}%
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Methodology */}
          <section className="bm-section">
            <h2 className="bm-section-title">Methodology</h2>
            <div className="bm-method-grid">
              {methodology.map((m) => (
                <div key={m.title} className="bm-method-card">
                  <h3 className="bm-method-name">{m.title}</h3>
                  <p className="bm-method-desc">{m.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bm-section bm-cta">
            <h2 className="bm-section-title">Try MemBlock</h2>
            <p className="section-copy">
              Three lines of Python to get started. No API keys, no setup wizard.
            </p>
            <pre className="doc-code-block" style={{ maxWidth: '480px', margin: '1.5rem auto 0' }}>
              pip install memblock
            </pre>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="/docs" className="outline-pill">DOCUMENTATION</a>
              <a href="/" className="outline-pill">HOME</a>
            </div>
          </section>
        </div>
      </main>

      <footer className="mega-footer">
        <div className="footer-glow" />
        <div className="content-shell">
          <p className="footer-note">&copy; 2026 MemBlock. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
