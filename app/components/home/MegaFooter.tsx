import { type FooterColumn } from '../../home-data'

type MegaFooterProps = {
  columns: FooterColumn[]
}

export default function MegaFooter({ columns }: MegaFooterProps) {
  return (
    <footer id="company" className="mega-footer">
      <div className="footer-glow" />
      <div className="content-shell">
        <div className="footer-grid">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="footer-title">{column.title}</h3>
              <ul className="footer-links">
                {column.links.map((link) => {
                  const isExternal = link === 'PyPI'
                  const href =
                    link === 'Documentation' ? '/docs'
                    : link === 'About' ? '/about'
                    : link === 'Benchmark' ? '/benchmark'
                    : link === 'How It Works' ? '#workflow'
                    : link === 'Features' ? '#features'
                    : link === 'PyPI' ? 'https://pypi.org/project/memblock/'
                    : '#'
                  return (
                    <li key={link}>
                      <a href={href} {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{link}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
        <p className="footer-note">&copy; 2026 MemBlock. All rights reserved.</p>
      </div>
    </footer>
  )
}
