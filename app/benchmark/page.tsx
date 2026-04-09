import type { Metadata } from 'next'
import { CSSProperties } from 'react'

export const metadata: Metadata = {
  title: 'Benchmarks | MemBlock',
  description:
    'MemBlock achieves 97.2% Recall@5 on LongMemEval and 57.7% Recall@5 on LoCoMo — head-to-head against MemPalace on the same datasets.',
}

/* ─── LongMemEval data ──────────────────────────────────────────────────── */

type LMERow = {
  category: string
  memblock_basic: number
  memblock_hybrid: number
  mempalace_raw: number
}

const lmeData: LMERow[] = [
  { category: 'knowledge-update',           memblock_basic: 98.7, memblock_hybrid: 100.0, mempalace_raw: 100.0 },
  { category: 'multi-session',              memblock_basic: 97.0, memblock_hybrid: 98.5,  mempalace_raw: 96.6 },
  { category: 'single-session-assistant',   memblock_basic: 96.4, memblock_hybrid: 96.4,  mempalace_raw: 96.4 },
  { category: 'single-session-preference',  memblock_basic: 96.7, memblock_hybrid: 96.7,  mempalace_raw: 96.7 },
  { category: 'single-session-user',        memblock_basic: 90.0, memblock_hybrid: 98.6,  mempalace_raw: 97.1 },
  { category: 'temporal-reasoning',         memblock_basic: 90.2, memblock_hybrid: 94.0,  mempalace_raw: 96.6 },
]

const lmeHeadline = [
  { label: 'MemBlock Hybrid R@5',  value: 97.2 },
  { label: 'MemBlock Basic R@5',   value: 94.4 },
  { label: 'MemPalace Raw R@5',    value: 96.6 },
]

const lmeMetrics = [
  { k: 1,  mb_basic: 0.720, mb_hybrid: 0.738, mp_raw: 0.806 },
  { k: 3,  mb_basic: 0.908, mb_hybrid: 0.948, mp_raw: 0.926 },
  { k: 5,  mb_basic: 0.944, mb_hybrid: 0.972, mp_raw: 0.966 },
  { k: 10, mb_basic: 0.978, mb_hybrid: 0.986, mp_raw: 0.982 },
]

/* ─── LoCoMo data ───────────────────────────────────────────────────────── */

type LoCoMoRow = {
  category: string
  memblock_basic: number
  memblock_hybrid: number
  mempalace_raw: number
  mempalace_hybrid: number
}

const locomoData: LoCoMoRow[] = [
  { category: 'Single-hop',           memblock_basic: 32.9, memblock_hybrid: 41.8, mempalace_raw: 38.8, mempalace_hybrid: 50.5 },
  { category: 'Temporal',             memblock_basic: 48.7, memblock_hybrid: 62.6, mempalace_raw: 58.8, mempalace_hybrid: 71.3 },
  { category: 'Temporal-inference',   memblock_basic: 28.2, memblock_hybrid: 38.5, mempalace_raw: 34.3, mempalace_hybrid: 43.4 },
  { category: 'Open-domain',          memblock_basic: 36.0, memblock_hybrid: 59.9, mempalace_raw: 44.8, mempalace_hybrid: 67.8 },
  { category: 'Adversarial',          memblock_basic: 39.7, memblock_hybrid: 64.3, mempalace_raw: 47.1, mempalace_hybrid: 70.6 },
]

/* ─── LoCoMo LLM-as-Judge (original evals) ─────────────────────────────── */

type BenchRow = {
  category: string
  memblock: number
}

const locomoJudgeData: BenchRow[] = [
  { category: 'Adversarial', memblock: 100 },
  { category: 'Single-Hop', memblock: 95 },
  { category: 'Open Domain', memblock: 92 },
  { category: 'Temporal', memblock: 90 },
  { category: 'Multi-Hop', memblock: 90 },
  { category: 'Overall', memblock: 93 },
]

/* ─── Methodology ───────────────────────────────────────────────────────── */

const methodology = [
  {
    title: 'Datasets',
    description:
      'LongMemEval — 500 questions across ~53 conversation sessions each. LoCoMo — 10 long conversations with 1,986 QA pairs across 5 reasoning categories. Both are published academic benchmarks.',
  },
  {
    title: 'Evaluation',
    description:
      'Retrieval benchmarks use Recall@k and NDCG@k on the same dataset, machine, and metrics. LLM-as-Judge evaluation uses Claude Sonnet 4 to score semantic equivalence on a 1-5 scale.',
  },
  {
    title: 'Reproducibility',
    description:
      'All benchmarks use session-level granularity with local embeddings (all-MiniLM-L6-v2). No API calls required for retrieval benchmarks. Scripts included in the repository under benchmarks/.',
  },
]

/* ─── Components ────────────────────────────────────────────────────────── */

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

function HeadlineCards({ items }: { items: { label: string; value: number }[] }) {
  return (
    <div className="bm-highlights">
      {items.map((item) => (
        <div key={item.label} className="bm-highlight-card">
          <span className="bm-highlight-value">
            {item.value}
            <span className="bm-highlight-pct">%</span>
          </span>
          <span className="bm-highlight-label">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

function ComparisonBar({ label, ours, theirs, oursLabel, theirsLabel }: {
  label: string; ours: number; theirs: number; oursLabel: string; theirsLabel: string
}) {
  const max = Math.max(ours, theirs, 1)
  const oursWidth = `${(ours / 100) * 100}%`
  const theirsWidth = `${(theirs / 100) * 100}%`
  const oursWins = ours >= theirs
  return (
    <div className="hb-row" style={{ marginBottom: '0.25rem' }}>
      <span className="hb-label" style={{ minWidth: '180px' }}>{label}</span>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2px' }}>
          <div className="hb-track" style={{ flex: 1 }}>
            <div className="hb-fill" style={{ width: oursWidth, background: oursWins ? 'var(--accent)' : 'var(--text-tertiary)', '--bar-width': oursWidth } as CSSProperties} />
          </div>
          <span className="hb-val" style={{ fontWeight: oursWins ? 700 : 400 }}>{ours}%</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div className="hb-track" style={{ flex: 1 }}>
            <div className="hb-fill" style={{ width: theirsWidth, background: !oursWins ? 'var(--accent)' : 'var(--text-tertiary)', opacity: 0.5, '--bar-width': theirsWidth } as CSSProperties} />
          </div>
          <span className="hb-val" style={{ fontWeight: !oursWins ? 700 : 400, opacity: 0.6 }}>{theirs}%</span>
        </div>
      </div>
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
            <a href="#longmemeval" className="nav-link">LONGMEMEVAL</a>
            <a href="#locomo" className="nav-link">LOCOMO</a>
            <a href="#llm-judge" className="nav-link">LLM-JUDGE</a>
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
          {/* Hero */}
          <div className="docs-hero">
            <p className="micro-label">[ Head-to-Head Benchmarks ]</p>
            <h1
              className="hero-title"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              MemBlock vs MemPalace
            </h1>
            <p className="section-copy">
              Same datasets. Same metrics. Same machine. MemBlock Hybrid achieves
              97.2% Recall@5 on LongMemEval (vs MemPalace 96.6%) with zero API calls.
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* LongMemEval Section                                            */}
          {/* ═══════════════════════════════════════════════════════════════ */}

          <section id="longmemeval" className="docs-section">
            <p className="micro-label">[ LongMemEval Benchmark ]</p>
            <h2 className="docs-section-title">LongMemEval — 500 Questions</h2>
            <p className="docs-section-desc" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Retrieval recall across ~53 conversation sessions per question. Higher is better.
            </p>

            <HeadlineCards items={lmeHeadline} />

            {/* Recall@k table */}
            <div className="bm-table-wrap" style={{ marginTop: '2rem' }}>
              <table className="bm-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th className="bm-th-ours">MemBlock Hybrid</th>
                    <th>MemBlock Basic</th>
                    <th>MemPalace Raw</th>
                  </tr>
                </thead>
                <tbody>
                  {lmeMetrics.map((row) => {
                    const best = Math.max(row.mb_basic, row.mb_hybrid, row.mp_raw)
                    return (
                      <tr key={row.k}>
                        <td className="bm-td-cat">Recall@{row.k}</td>
                        <td className={row.mb_hybrid === best ? 'bm-td-ours bm-td-best' : 'bm-td-ours'}>
                          {(row.mb_hybrid * 100).toFixed(1)}%
                        </td>
                        <td className={row.mb_basic === best ? 'bm-td-best' : ''}>
                          {(row.mb_basic * 100).toFixed(1)}%
                        </td>
                        <td className={row.mp_raw === best ? 'bm-td-best' : ''}>
                          {(row.mp_raw * 100).toFixed(1)}%
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* Per-type R@5 table */}
            <h3 className="docs-section-title" style={{ fontSize: '1.25rem', marginTop: '2rem' }}>Per-Type Recall@5</h3>
            <div className="bm-table-wrap">
              <table className="bm-table">
                <thead>
                  <tr>
                    <th>Question Type</th>
                    <th className="bm-th-ours">MemBlock Hybrid</th>
                    <th>MemBlock Basic</th>
                    <th>MemPalace Raw</th>
                  </tr>
                </thead>
                <tbody>
                  {lmeData.map((row) => {
                    const best = Math.max(row.memblock_basic, row.memblock_hybrid, row.mempalace_raw)
                    return (
                      <tr key={row.category}>
                        <td className="bm-td-cat">{row.category}</td>
                        <td className={row.memblock_hybrid === best ? 'bm-td-ours bm-td-best' : 'bm-td-ours'}>
                          {row.memblock_hybrid}%
                        </td>
                        <td className={row.memblock_basic === best ? 'bm-td-best' : ''}>
                          {row.memblock_basic}%
                        </td>
                        <td className={row.mempalace_raw === best ? 'bm-td-best' : ''}>
                          {row.mempalace_raw}%
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* LoCoMo Section                                                 */}
          {/* ═══════════════════════════════════════════════════════════════ */}

          <section id="locomo" className="docs-section">
            <p className="micro-label">[ LoCoMo Benchmark ]</p>
            <h2 className="docs-section-title">LoCoMo — 1,986 QA Pairs</h2>
            <p className="docs-section-desc" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Retrieval recall across 10 long conversations. Recall@5 — fraction of evidence sessions found in top-5 results.
            </p>

            <div className="bm-highlights">
              <div className="bm-highlight-card">
                <span className="bm-highlight-value">57.7<span className="bm-highlight-pct">%</span></span>
                <span className="bm-highlight-label">MemBlock Hybrid R@5</span>
              </div>
              <div className="bm-highlight-card">
                <span className="bm-highlight-value">38.1<span className="bm-highlight-pct">%</span></span>
                <span className="bm-highlight-label">MemBlock Basic R@5</span>
              </div>
              <div className="bm-highlight-card">
                <span className="bm-highlight-value">46.2<span className="bm-highlight-pct">%</span></span>
                <span className="bm-highlight-label">MemPalace Raw R@5</span>
              </div>
              <div className="bm-highlight-card">
                <span className="bm-highlight-value">65.4<span className="bm-highlight-pct">%</span></span>
                <span className="bm-highlight-label">MemPalace Hybrid R@5</span>
              </div>
            </div>

            {/* Per-category R@5 table */}
            <div className="bm-table-wrap" style={{ marginTop: '2rem' }}>
              <table className="bm-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th className="bm-th-ours">MemBlock Hybrid</th>
                    <th>MemBlock Basic</th>
                    <th>MemPalace Raw</th>
                    <th>MemPalace Hybrid</th>
                  </tr>
                </thead>
                <tbody>
                  {locomoData.map((row) => {
                    const best = Math.max(row.memblock_basic, row.memblock_hybrid, row.mempalace_raw, row.mempalace_hybrid)
                    return (
                      <tr key={row.category}>
                        <td className="bm-td-cat">{row.category}</td>
                        <td className={row.memblock_hybrid === best ? 'bm-td-ours bm-td-best' : 'bm-td-ours'}>
                          {row.memblock_hybrid}%
                        </td>
                        <td>{row.memblock_basic}%</td>
                        <td>{row.mempalace_raw}%</td>
                        <td className={row.mempalace_hybrid === best ? 'bm-td-best' : ''}>
                          {row.mempalace_hybrid}%
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* Performance */}
            <h3 className="docs-section-title" style={{ fontSize: '1.25rem', marginTop: '2rem' }}>Performance</h3>
            <div className="perf-grid">
              <div className="perf-card reveal" style={{ '--reveal-delay': '0ms' } as CSSProperties}>
                <span className="perf-value">10s</span>
                <span className="perf-label">MemBlock total time</span>
                <span className="perf-detail">1,986 questions</span>
              </div>
              <div className="perf-card reveal" style={{ '--reveal-delay': '70ms' } as CSSProperties}>
                <span className="perf-value">100s</span>
                <span className="perf-label">MemPalace total time</span>
                <span className="perf-detail">1,986 questions</span>
              </div>
              <div className="perf-card reveal" style={{ '--reveal-delay': '140ms' } as CSSProperties}>
                <span className="perf-value">10x</span>
                <span className="perf-label">Faster</span>
                <span className="perf-detail">SQLite vs ChromaDB</span>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* LoCoMo LLM-as-Judge (original evals)                           */}
          {/* ═══════════════════════════════════════════════════════════════ */}

          <section id="llm-judge" className="docs-section">
            <p className="micro-label">[ LoCoMo LLM-as-Judge ]</p>
            <h2 className="docs-section-title">93% Accuracy — LLM-as-Judge Evaluation</h2>
            <p className="docs-section-desc" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              End-to-end accuracy using Claude Sonnet 4 as judge. Measures whether MemBlock-retrieved
              context produces semantically equivalent answers to full-conversation baseline.
            </p>

            <div className="bm-highlights">
              {locomoJudgeData.map((row) => (
                <div key={row.category} className="bm-highlight-card">
                  <span className="bm-highlight-value">
                    {row.memblock}
                    <span className="bm-highlight-pct">%</span>
                  </span>
                  <span className="bm-highlight-label">{row.category}</span>
                </div>
              ))}
            </div>

            <h3 className="docs-section-title" style={{ fontSize: '1.25rem', marginTop: '2rem' }}>Results by Category</h3>
            <p className="docs-section-desc" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              LLM-as-Judge accuracy (%) — how well MemBlock-retrieved context matches full-conversation answers.
            </p>
            <div className="hb-chart">
              {locomoJudgeData.map((row, i) => (
                <div key={row.category} className="reveal" style={{ '--reveal-delay': `${i * 60}ms` } as CSSProperties}>
                  <HorizontalBar row={row} />
                </div>
              ))}
            </div>

            {/* What is LoCoMo */}
            <h3 className="docs-section-title" style={{ fontSize: '1.25rem', marginTop: '2.5rem' }}>What is the LoCoMo Benchmark?</h3>
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

            {/* Performance metrics */}
            <h3 className="docs-section-title" style={{ fontSize: '1.25rem', marginTop: '2.5rem' }}>Context Efficiency</h3>
            <p className="docs-section-desc" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              MemBlock retrieves only what matters — fewer tokens, faster responses, same accuracy.
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

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* Methodology                                                    */}
          {/* ═══════════════════════════════════════════════════════════════ */}

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
                      {m.title === 'Datasets' && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 7V4h16v3M9 20h6M12 4v16" />
                        </svg>
                      )}
                      {m.title === 'Evaluation' && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 12l2 2 4-4M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                        </svg>
                      )}
                      {m.title === 'Reproducibility' && (
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
