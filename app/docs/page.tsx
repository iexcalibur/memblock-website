import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation | MemBlock',
  description: 'SDK reference for MemBlock — the local-first AI memory SDK.',
}

type ApiMethod = {
  name: string
  signature: string
  description: string
  returns: string
}

const coreMethods: ApiMethod[] = [
  {
    name: 'MemBlock()',
    signature:
      'MemBlock(storage="sqlite:///:memory:", encryption_key=None, embeddings=False)',
    description:
      'Initialize a MemBlock instance. Supports SQLite (local file or in-memory) and PostgreSQL. Pass an encryption_key to enable AES-256 per-block encryption.',
    returns: 'MemBlock instance',
  },
  {
    name: '.store()',
    signature:
      'mem.store(content, type=BlockType.FACT, confidence=1.0, tags=None, encryption_level=EncryptionLevel.NONE)',
    description:
      'Store a new memory block. Supports 5 types: FACT, PREFERENCE, EVENT, ENTITY, RELATION. Optionally encrypt at STANDARD or SENSITIVE level.',
    returns: 'Block',
  },
  {
    name: '.query()',
    signature:
      'mem.query(type=None, tags=None, text_search=None, min_confidence=0.0, sort_by="relevance", limit=10)',
    description:
      'Query blocks with structured filters. Combines full-text search, tag filtering, type filtering, and optional semantic (vector) hybrid search.',
    returns: 'list[Block]',
  },
  {
    name: '.build_context()',
    signature:
      'mem.build_context(query=None, token_budget=4000, strategy="relevance")',
    description:
      'Build an LLM-ready context string from relevant memory. Strategies: relevance, graph_walk, type_grouped. Fits within your token budget.',
    returns: 'str',
  },
  {
    name: '.update()',
    signature: 'mem.update(block_id, content=None, confidence=None, tags=None)',
    description:
      'Update an existing block by ID. Only provided fields are modified. Triggers on_update hooks.',
    returns: 'Block | None',
  },
  {
    name: '.delete()',
    signature: 'mem.delete(block_id, cascade=False)',
    description:
      'Delete a block by ID. With cascade=True, also removes linked child blocks and graph edges.',
    returns: 'bool',
  },
]

const graphMethods: ApiMethod[] = [
  {
    name: '.link()',
    signature: 'mem.link(source_id, target_id, relation=EdgeRelation.RELATED_TO)',
    description:
      'Create a directed edge between two blocks. Supported relations: RELATED_TO, DERIVED_FROM, CONTRADICTS, SUPPORTS, PRECEDES, PART_OF.',
    returns: 'None',
  },
  {
    name: '.neighbors()',
    signature: 'mem.neighbors(block_id, relation=None)',
    description:
      'Get all blocks directly connected to a block. Optionally filter by relation type.',
    returns: 'list[Block]',
  },
  {
    name: '.traverse()',
    signature: 'mem.traverse(block_id, max_depth=3)',
    description:
      'Walk the knowledge graph from a starting block up to max_depth hops. Returns all reachable blocks.',
    returns: 'list[Block]',
  },
]

const advancedMethods: ApiMethod[] = [
  {
    name: '.verify()',
    signature: 'mem.verify()',
    description:
      'Run tamper detection across the entire operation log. SHA-256 hash-chain verification catches any unauthorized modification.',
    returns: 'TamperReport',
  },
  {
    name: '.export_markdown()',
    signature: 'mem.export_markdown()',
    description:
      'Export all memory blocks as a formatted Markdown string. Useful for debugging, sharing, or archiving.',
    returns: 'str',
  },
  {
    name: 'AsyncMemBlock',
    signature: 'async with AsyncMemBlock(storage=...) as mem:',
    description:
      'Async wrapper around MemBlock. All methods (store, query, build_context, etc.) are awaitable. Use as an async context manager.',
    returns: 'AsyncMemBlock instance',
  },
]

const blockTypes = [
  { name: 'FACT', description: 'Objective information or knowledge' },
  { name: 'PREFERENCE', description: 'User likes, dislikes, or choices' },
  { name: 'EVENT', description: 'Something that happened at a point in time' },
  { name: 'ENTITY', description: 'A person, place, organization, or thing' },
  { name: 'RELATION', description: 'A connection between two entities' },
]

function MethodCard({ method }: { method: ApiMethod }) {
  return (
    <div className="doc-method">
      <h3 className="doc-method-name">{method.name}</h3>
      <pre className="doc-method-sig">{method.signature}</pre>
      <p className="doc-method-desc">{method.description}</p>
      <p className="doc-method-returns">
        <span className="doc-returns-label">Returns:</span> {method.returns}
      </p>
    </div>
  )
}

export default function DocsPage() {
  return (
    <div className="page">
      <header className="top-nav">
        <div className="content-shell nav-shell">
          <a href="/" className="brand" aria-label="Memblock home">
            memblock
          </a>
          <nav className="primary-nav" aria-label="Documentation navigation">
            <a href="#installation" className="nav-link">INSTALL</a>
            <a href="#core" className="nav-link">CORE</a>
            <a href="#graph" className="nav-link">GRAPH</a>
            <a href="#advanced" className="nav-link">ADVANCED</a>
            <a href="#types" className="nav-link">TYPES</a>
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
          <div className="docs-hero">
            <p className="micro-label">[ SDK REFERENCE ]</p>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              MemBlock Documentation
            </h1>
            <p className="section-copy">
              Everything you need to store, query, and reason over structured memory in Python.
            </p>
          </div>

          <div className="docs-install">
            <pre className="doc-code-block">pip install memblock</pre>
          </div>

          <section id="installation" className="docs-section">
            <h2 className="docs-section-title">Installation Extras</h2>
            <p className="docs-section-desc">
              The base install gives you everything for local memory with SQLite. Add optional extras for additional capabilities.
            </p>
            <div className="docs-extras-grid">
              <div className="doc-extra-card">
                <pre className="doc-extra-cmd">pip install &quot;memblock[postgres]&quot;</pre>
                <p className="doc-extra-desc">PostgreSQL storage backend for production multi-tenant deployments</p>
              </div>
              <div className="doc-extra-card">
                <pre className="doc-extra-cmd">pip install &quot;memblock[embeddings]&quot;</pre>
                <p className="doc-extra-desc">Local vector embeddings via FastEmbed — CPU-only, no API key needed</p>
              </div>
              <div className="doc-extra-card">
                <pre className="doc-extra-cmd">pip install &quot;memblock[llm]&quot;</pre>
                <p className="doc-extra-desc">LLM-powered memory extraction with OpenAI and Anthropic</p>
              </div>
              <div className="doc-extra-card">
                <pre className="doc-extra-cmd">pip install &quot;memblock[llm-gemini]&quot;</pre>
                <p className="doc-extra-desc">Gemini-powered extraction and conflict resolution via Google GenAI</p>
              </div>
              <div className="doc-extra-card">
                <pre className="doc-extra-cmd">pip install &quot;memblock[reranker-cohere]&quot;</pre>
                <p className="doc-extra-desc">Cohere-based reranker for improved search relevance</p>
              </div>
              <div className="doc-extra-card">
                <pre className="doc-extra-cmd">pip install &quot;memblock[reranker-cross-encoder]&quot;</pre>
                <p className="doc-extra-desc">HuggingFace cross-encoder reranker — runs locally</p>
              </div>
              <div className="doc-extra-card doc-extra-all">
                <pre className="doc-extra-cmd">pip install &quot;memblock[all]&quot;</pre>
                <p className="doc-extra-desc">Everything above — all backends, embeddings, LLM extraction, and rerankers</p>
              </div>
            </div>
          </section>

          <section id="core" className="docs-section">
            <h2 className="docs-section-title">Core API</h2>
            <p className="docs-section-desc">
              The essential methods for storing, querying, and building context from memory.
            </p>
            <div className="docs-grid">
              {coreMethods.map((m) => (
                <MethodCard key={m.name} method={m} />
              ))}
            </div>
          </section>

          <section id="graph" className="docs-section">
            <h2 className="docs-section-title">Knowledge Graph</h2>
            <p className="docs-section-desc">
              Connect memories into a traversable graph. No external graph database required.
            </p>
            <div className="docs-grid">
              {graphMethods.map((m) => (
                <MethodCard key={m.name} method={m} />
              ))}
            </div>
          </section>

          <section id="advanced" className="docs-section">
            <h2 className="docs-section-title">Advanced</h2>
            <p className="docs-section-desc">
              Tamper detection, async support, and data export.
            </p>
            <div className="docs-grid">
              {advancedMethods.map((m) => (
                <MethodCard key={m.name} method={m} />
              ))}
            </div>
          </section>

          <section id="types" className="docs-section">
            <h2 className="docs-section-title">Block Types</h2>
            <p className="docs-section-desc">
              Every memory block has a type. Use the right type to enable structured queries and context building.
            </p>
            <div className="docs-types-grid">
              {blockTypes.map((t) => (
                <div key={t.name} className="doc-type-card">
                  <span className="doc-type-name">{t.name}</span>
                  <span className="doc-type-desc">{t.description}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="docs-section docs-quickstart">
            <h2 className="docs-section-title">Quick Example</h2>
            <pre className="doc-code-block">{`from memblock import MemBlock, BlockType

mem = MemBlock(storage="sqlite:///memory.db")

# Store a preference
mem.store("User prefers dark mode", type=BlockType.PREFERENCE)

# Query by text
results = mem.query(text_search="dark mode")

# Build LLM context
context = mem.build_context(
    query="user preferences",
    token_budget=2000
)`}</pre>
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
