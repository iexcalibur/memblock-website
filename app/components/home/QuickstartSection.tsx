type TerminalLine = {
  type: 'shell' | 'prompt' | 'output' | 'comment'
  text: string
}

const lines: TerminalLine[] = [
  { type: 'shell', text: '$ pip install memblock' },
  { type: 'comment', text: '# Store structured memories' },
  { type: 'prompt', text: '>>> from memblock import MemBlock, BlockType' },
  { type: 'prompt', text: '>>> mem = MemBlock(storage="sqlite:///memory.db")' },
  { type: 'prompt', text: '>>> mem.store("User prefers dark mode", type=BlockType.PREFERENCE)' },
  { type: 'output', text: "Block(id='blk_7f2a', type=PREFERENCE, confidence=1.0)" },
  { type: 'comment', text: '# Query by text' },
  { type: 'prompt', text: '>>> mem.query(text_search="dark mode")' },
  { type: 'output', text: "[Block(id='blk_7f2a', content='User prefers dark mode')]" },
  { type: 'comment', text: '# Build LLM-ready context' },
  { type: 'prompt', text: '>>> mem.build_context(query="user preferences", token_budget=2000)' },
  { type: 'output', text: "'[PREFERENCE] User prefers dark mode (confidence: 1.00)'" },
]

function colorize(line: TerminalLine) {
  const { type, text } = line

  if (type === 'shell') {
    return <><span className="t-shell">$</span>{' '}<span className="t-cmd">{text.slice(2)}</span></>
  }
  if (type === 'comment') {
    return <span className="t-comment">{text}</span>
  }
  if (type === 'output') {
    return <span className="t-output">{text}</span>
  }

  // prompt lines — colorize parts
  const prompt = '>>> '
  const rest = text.slice(4)

  return (
    <>
      <span className="t-prompt">{prompt}</span>
      {colorizeCode(rest)}
    </>
  )
}

function colorizeCode(code: string) {
  // Simple regex-based syntax highlighting
  const parts: JSX.Element[] = []
  let remaining = code
  let key = 0

  while (remaining.length > 0) {
    // Strings (double or single quoted)
    const strMatch = remaining.match(/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/)
    if (strMatch) {
      parts.push(<span key={key++} className="t-string">{strMatch[1]}</span>)
      remaining = remaining.slice(strMatch[1].length)
      continue
    }

    // Keywords
    const kwMatch = remaining.match(/^(from|import|as|def|class|return|if|else|elif|for|in|with|await|async)\b/)
    if (kwMatch) {
      parts.push(<span key={key++} className="t-keyword">{kwMatch[1]}</span>)
      remaining = remaining.slice(kwMatch[1].length)
      continue
    }

    // Function calls / methods
    const fnMatch = remaining.match(/^(\.\w+)\(/)
    if (fnMatch) {
      parts.push(<span key={key++} className="t-method">{fnMatch[1]}</span>)
      remaining = remaining.slice(fnMatch[1].length)
      continue
    }

    // Class names (PascalCase)
    const clsMatch = remaining.match(/^(MemBlock|BlockType|Block)\b/)
    if (clsMatch) {
      parts.push(<span key={key++} className="t-class">{clsMatch[1]}</span>)
      remaining = remaining.slice(clsMatch[1].length)
      continue
    }

    // Named params (word=)
    const paramMatch = remaining.match(/^(\w+)=/)
    if (paramMatch) {
      parts.push(<span key={key++} className="t-param">{paramMatch[1]}</span>)
      remaining = remaining.slice(paramMatch[1].length)
      continue
    }

    // Constants (PREFERENCE, FACT, etc)
    const constMatch = remaining.match(/^(PREFERENCE|FACT|EVENT|ENTITY|RELATION|NONE)\b/)
    if (constMatch) {
      parts.push(<span key={key++} className="t-const">{constMatch[1]}</span>)
      remaining = remaining.slice(constMatch[1].length)
      continue
    }

    // Numbers
    const numMatch = remaining.match(/^(\d+\.?\d*)/)
    if (numMatch) {
      parts.push(<span key={key++} className="t-num">{numMatch[1]}</span>)
      remaining = remaining.slice(numMatch[1].length)
      continue
    }

    // Default char
    parts.push(<span key={key++} className="t-plain">{remaining[0]}</span>)
    remaining = remaining.slice(1)
  }

  return <>{parts}</>
}

export default function QuickstartSection() {
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
          <div className="terminal-dots">
            <span className="t-dot t-dot-red" />
            <span className="t-dot t-dot-yellow" />
            <span className="t-dot t-dot-green" />
            <span className="terminal-title">python3</span>
          </div>
          <pre className="terminal-output">
            {lines.map((line, i) => (
              <div key={i} className={`t-line t-line-${line.type}`}>
                {colorize(line)}
              </div>
            ))}
          </pre>
        </article>
      </div>
    </section>
  )
}
