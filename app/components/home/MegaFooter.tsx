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
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="footer-note">&copy; 2026 MemBlock. All rights reserved.</p>
      </div>
    </footer>
  )
}
