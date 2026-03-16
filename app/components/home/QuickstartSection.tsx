type QuickstartSectionProps = {
  terminalOutput: string[]
}

export default function QuickstartSection({ terminalOutput }: QuickstartSectionProps) {
  return (
    <section id="quickstart" className="section">
      <div className="content-shell quickstart">
        <div className="quickstart-copy reveal">
          <p className="micro-label">Quickstart</p>
          <h2 className="section-title">Get started in three lines of Python.</h2>
          <p className="section-copy">
            Install from PyPI. Create a MemBlock instance. Store your first memory.
            No API keys, no configuration files, no setup wizard.
          </p>
          <a href="/docs" className="outline-pill">
            VIEW DOCUMENTATION
          </a>
        </div>

        <article className="terminal-frame reveal">
          <p className="terminal-title">[ PYTHON REPL ]</p>
          <pre className="terminal-output">{terminalOutput.join('\n')}</pre>
          <div className="terminal-progress-wrap" aria-label="Progress">
            <div className="terminal-progress-fill" />
          </div>
          <p className="terminal-subline">READY</p>
        </article>
      </div>
    </section>
  )
}
