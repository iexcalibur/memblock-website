import { CSSProperties } from 'react'

const useCases = [
  {
    title: 'AI Companion',
    description: 'Persistent user context across every session.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Coding Agents',
    description: 'Remember codebase patterns and developer preferences.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    title: 'Customer Support Bot',
    description: 'Track tickets, history, and resolution patterns.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
  },
  {
    title: 'Education Agent',
    description: 'Adapt to learning pace and knowledge gaps.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
      </svg>
    ),
  },
  {
    title: 'Gaming & Interactive',
    description: 'NPCs that remember player choices and relationships.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 12h4M8 10v4" />
        <circle cx="17" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Creation Assistants',
    description: 'Recall style guides, past edits, and creative context.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
        <path d="M18 15l.75 2.25L21 18l-2.25.75L18 21l-.75-2.25L15 18l2.25-.75z" />
      </svg>
    ),
  },
]

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="section section-alt">
      <div className="content-shell">
        <p className="micro-label">Use Cases</p>
        <h2 className="section-title reveal">
          Long-term memory for any scenario
        </h2>

        <div className="card-grid">
          {useCases.map((uc, index) => (
            <article
              key={uc.title}
              className="surface-card reveal"
              style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
            >
              <div className="card-head">
                <span className="line-icon">{uc.icon}</span>
              </div>
              <h3 className="card-title">{uc.title}</h3>
              <p className="card-copy">{uc.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
