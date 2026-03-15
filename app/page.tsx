type Feature = {
  title: string
  description: string
}

type ComparisonRow = {
  criteria: string
  memblock: string
  mem0: string
}

const features: Feature[] = [
  {
    title: 'Typed memory',
    description:
      'Classify memory as facts, preferences, events, entities, and relations before retrieval.'
  },
  {
    title: 'Knowledge graph',
    description:
      'Keep causal, support, and contradiction links between memory nodes for explainable context.'
  },
  {
    title: 'Hybrid retrieval',
    description:
      'Blend full-text, vector, and recency ranking with decay-aware scoring.'
  },
  {
    title: 'Session aware',
    description:
      'Store both session-specific and user-wide memory with clear isolation controls.'
  },
  {
    title: 'Dedup policy engine',
    description:
      'Error, skip, merge, or return existing memories with configurable duplicate control.'
  },
  {
    title: 'Integrity',
    description:
      'Field-level encryption and operation logs for audit-friendly traceability.'
  },
  {
    title: 'Auto extraction',
    description: 'Generate structured memory entries from agent conversations automatically.'
  },
  {
    title: 'SDK-first deployment',
    description:
      'Install in your own infra, no opaque memory layer dependency.'
  }
]

const architecture = ['Ingest', 'Store', 'Index', 'Retrieve', 'Rank', 'Context build', 'LLM ready']

const compareRows: ComparisonRow[] = [
  { criteria: 'Data control', memblock: 'Full local ownership', mem0: 'Managed service default' },
  { criteria: 'Structure', memblock: 'Typed blocks + graph', mem0: 'Platform-led memory model' },
  { criteria: 'Deployment', memblock: 'Self-managed in your infra', mem0: 'Cloud-first default' },
  { criteria: 'Cost model', memblock: 'Private distribution path', mem0: 'Subscription/API billing' }
]

const metrics = [
  { value: '335+', label: 'Unit tests' },
  { value: '2', label: 'Storage engines' },
  { value: 'Private', label: 'Invite-only delivery' }
]

const codeBlock = `from memblock import MemBlock, BlockType

mem = MemBlock(
  storage="sqlite:///./agent_memory.db",
  user_id="user_123",
  encryption_key="..."
)

mem.store("User prefers Python over JavaScript", type=BlockType.PREFERENCE)
mem.store("User asked about retirement risk on 2026-03-15", type=BlockType.EVENT)

context = mem.build_context(query="portfolio preferences", token_budget=2000)
print(context)`

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/15 bg-[#050913]/70 backdrop-blur">
        <div className="mx-auto flex h-[70px] w-[min(1120px,92vw)] items-center justify-between">
          <a href="#top" className="text-sm font-black uppercase tracking-[0.08em]">
            MemBlock
          </a>
          <nav className="hidden md:flex items-center gap-5 text-sm text-slate-300">
            <a href="#features">Features</a>
            <a href="#architecture">Architecture</a>
            <a href="#compare">Compare</a>
            <a href="#pricing">Access</a>
          </nav>
          <a href="#start" className="rounded-full border border-white/15 px-4 py-2 text-sm">
            Get started
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative pt-20 md:pt-28 pb-16">
          <div className="orb orbOne" />
          <div className="orb orbTwo" />
          <div className="mx-auto w-[min(1120px,92vw)] space-y-4">
            <p className="hero-eyebrow">LOCAL-FIRST MEMORY FOR AI PRODUCTS</p>
            <h1 className="hero-title">Own your memory stack. Own your context.</h1>
            <p className="hero-subtitle">
              MemBlock is a private, typed memory layer for agents and AI apps. Keep your memory in your
              own database with structured blocks, graph links, and deterministic retrieval.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href="#start" className="btn btn-primary">
                Explore SDK
              </a>
              <a href="#compare" className="btn btn-ghost">
                Why MemBlock
              </a>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"
                >
                  <h2 className="m-0 text-3xl font-semibold text-[#dbf4ff] md:text-4xl">
                    {metric.value}
                  </h2>
                  <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="start" className="section-pad">
          <div className="mx-auto w-[min(1120px,92vw)]">
            <p className="section-eyebrow">Get started in one file</p>
            <h2 className="section-title">A minimal control plane for long-term memory</h2>
            <div className="code-panel">
              <pre className="overflow-auto p-4 text-[0.93rem] leading-7 text-slate-200">
                <code>{codeBlock}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="features" className="section-pad section-alt">
          <div className="mx-auto w-[min(1120px,92vw)]">
            <p className="section-eyebrow">Built for builders</p>
            <h2 className="section-title">Why teams pick MemBlock</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {features.map((item, index) => (
                <article
                  key={item.title}
                  className="feature-card animate-[riseIn_650ms_cubic-bezier(0.16,1,0.3,1)_both] rounded-2xl border border-white/15 bg-white/5 p-4"
                  style={{ animationDelay: `${index * 0.04}s` }}
                >
                  <h3 className="mb-2 text-base font-semibold text-slate-100">{item.title}</h3>
                  <p className="m-0 text-sm text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="architecture" className="section-pad">
          <div className="mx-auto w-[min(1120px,92vw)]">
            <p className="section-eyebrow">How it works</p>
            <h2 className="section-title">Architecture flow</h2>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {architecture.map((label, idx) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="flow-badge">{label}</span>
                  {idx !== architecture.length - 1 ? <span className="flow-arrow">→</span> : null}
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <article className="split-card">
                <h3 className="split-title">Core lifecycle</h3>
                <ul className="split-list">
                  <li>Store structured memory blocks and metadata</li>
                  <li>Index semantic and lexical channels in parallel</li>
                  <li>Score by confidence, recency, and intent alignment</li>
                  <li>Emit compact context with token controls</li>
                </ul>
              </article>
              <article className="split-card">
                <h3 className="split-title">Production controls</h3>
                <ul className="split-list">
                  <li>Migration-safe schemas for local and managed databases</li>
                  <li>Encryption and operation audit logs</li>
                  <li>CLI and SDK operations for pruning, exporting, rebuilding</li>
                  <li>Clear ownership boundaries in multi-tenant installs</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="compare" className="section-pad section-alt">
          <div className="mx-auto w-[min(1120px,92vw)]">
            <p className="section-eyebrow">Positioning</p>
            <h2 className="section-title">MemBlock vs Mem0</h2>
            <div className="overflow-x-auto rounded-2xl border border-white/15">
              <table className="min-w-[640px] w-full border-collapse">
                <thead>
                  <tr>
                    <th className="bg-slate-900/90 text-left px-4 py-3 text-sm font-medium">Decision criteria</th>
                    <th className="bg-slate-900/90 text-left px-4 py-3 text-sm font-medium">MemBlock</th>
                    <th className="bg-slate-900/90 text-left px-4 py-3 text-sm font-medium">Mem0</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row.criteria}>
                      <td className="px-4 py-3 text-sm border-b border-white/15 text-slate-200">{row.criteria}</td>
                      <td className="px-4 py-3 text-sm border-b border-white/15 text-slate-300">{row.memblock}</td>
                      <td className="px-4 py-3 text-sm border-b border-white/15 text-slate-300">{row.mem0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="pricing" className="section-pad">
          <div className="mx-auto flex w-[min(1120px,92vw)] justify-center">
            <article className="pricing-card w-full max-w-[680px]">
              <p className="section-eyebrow">Private rollout</p>
              <h2 className="section-title">Single private distribution channel</h2>
              <p className="pricing-copy">
                MemBlock is distributed by invitation and designed for controlled onboarding with license
                boundaries built into the deployment flow.
              </p>
              <a href="#" className="btn btn-primary inline-flex">
                Request access
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/15 py-5 text-center text-sm text-slate-400">
        <div className="mx-auto w-[min(1120px,92vw)]">MemBlock © 2026 • Local-first AI memory for teams that own their infrastructure.</div>
      </footer>
    </div>
  )
}
