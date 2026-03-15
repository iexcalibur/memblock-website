type TopNavProps = {
  navItems: string[]
  requestDemoHref?: string
}

export default function TopNav({ navItems, requestDemoHref = '#quickstart' }: TopNavProps) {
  return (
    <header className="top-nav">
      <div className="content-shell nav-shell">
        <a href="#features" className="brand" aria-label="Memblock home">
          memblock
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const href =
              item === 'GITHUB'
                ? 'https://github.com/iexcalibur/memblock'
                : `#${item.toLowerCase()}`
            const target = item === 'GITHUB' ? '_blank' : undefined
            const rel = item === 'GITHUB' ? 'noopener noreferrer' : undefined
            return (
              <a key={item} href={href} className="nav-link" target={target} rel={rel}>
                {item}
              </a>
            )
          })}
        </nav>

        <div className="nav-right">
          <a href={requestDemoHref} className="outline-pill nav-pill">
            GET STARTED
          </a>
        </div>
      </div>
    </header>
  )
}
