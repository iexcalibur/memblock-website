import { CSSProperties } from 'react'

const productionFeatures = [
  {
    title: 'PostgreSQL + pgvector',
    description: 'Production storage with full-text search, GIN indexes, and native HNSW vector search.',
    icon: 'M4 6h16M4 10h16M4 14h16M4 18h16',
  },
  {
    title: 'Multi-Tenant Isolation',
    description: 'User-scoped data with composite keys. Org, project, session, and agent-level scoping.',
    icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  },
  {
    title: 'Connection Pooling',
    description: 'LRU-cached MemBlockPool with per-user instances and psycopg_pool for concurrent access.',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  {
    title: 'LLM Auto-Extraction',
    description: 'Extract structured memories from conversations via OpenAI, Anthropic, or Gemini.',
    icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  },
  {
    title: 'Org-Level Analytics',
    description: 'Track questions across users. Trending topics, frequency counts, and noise filtering.',
    icon: 'M18 20V10M12 20V4M6 20v-6',
  },
  {
    title: 'Conflict Resolution',
    description: 'LLM-powered decisions — automatically add, update, or remove contradicting memories.',
    icon: 'M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3',
  },
]

export default function ProductionSection() {
  return (
    <section id="production" className="section section-alt">
      <div className="content-shell">
        <p className="micro-label">Production Ready</p>
        <h2 className="section-title reveal">
          Ship to production, not just a demo
        </h2>
        <p className="section-copy">
          Everything you need to deploy AI memory at scale — from multi-tenant
          isolation to LLM-powered extraction and tamper-proof audit trails.
        </p>

        <div className="card-grid">
          {productionFeatures.map((item, index) => (
            <article
              key={item.title}
              className="surface-card reveal"
              style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
            >
              <div className="card-head">
                <svg
                  className="line-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={item.icon} />
                </svg>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-copy">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
