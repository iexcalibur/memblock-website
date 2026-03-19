import { CSSProperties } from 'react'

const highlights = [
  { label: 'Single-Hop', value: 95, suffix: '%' },
  { label: 'Multi-Hop', value: 88, suffix: '%' },
  { label: 'Temporal', value: 93, suffix: '%' },
  { label: 'Overall', value: 92, suffix: '%' },
]

export default function BenchmarkSection() {
  return (
    <section id="benchmark" className="section">
      <div className="content-shell">
        <div className="bench-layout reveal">
          <div className="bench-copy">
            <p className="micro-label">LoCoMo Benchmark</p>
            <h2 className="section-title">
              92% accuracy on the LoCoMo benchmark
            </h2>
            <p className="section-copy">
              MemBlock achieves state-of-the-art results across all reasoning
              categories — single-hop, multi-hop, temporal, and open-domain — on the
              LoCoMo long-conversation memory dataset.
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
                  {h.value}
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
