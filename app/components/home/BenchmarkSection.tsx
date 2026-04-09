import { CSSProperties } from 'react'

const highlights = [
  { label: 'LongMemEval R@5', value: 97.2, suffix: '%' },
  { label: 'LoCoMo R@5', value: 57.7, suffix: '%' },
  { label: 'Zero API Calls', value: 0, suffix: '', display: 'Local' },
  { label: 'vs MemPalace Speed', value: 10, suffix: 'x' },
]

export default function BenchmarkSection() {
  return (
    <section id="benchmark" className="section">
      <div className="content-shell">
        <div className="bench-layout reveal">
          <div className="bench-copy">
            <p className="micro-label">Head-to-Head Benchmarks</p>
            <h2 className="section-title">
              97.2% Recall@5 on LongMemEval
            </h2>
            <p className="section-copy">
              MemBlock beats MemPalace (96.6%) on LongMemEval with zero API calls.
              Tested head-to-head on the same datasets, same metrics, same machine.
              10x faster retrieval with SQLite vs ChromaDB.
            </p>
            <a href="/benchmark" className="outline-pill">
              VIEW FULL RESULTS
            </a>
          </div>

          <div className="bench-stats">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className="bench-stat reveal"
                style={{ '--reveal-delay': `${i * 80}ms` } as CSSProperties}
              >
                <span className="bench-value">
                  {h.display ?? h.value}
                  <span className="bench-suffix">{h.suffix}</span>
                </span>
                <span className="bench-label">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
