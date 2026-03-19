export type CapabilityItem = {
  title: string
  description: string
  iconPath: string
  isNew?: boolean
}

export type FooterColumn = {
  title: string
  links: string[]
}

export const navItems = ['HOW IT WORKS', 'FEATURES', 'DOCS', 'COMPANY']

export const features: CapabilityItem[] = [
  {
    title: 'Knowledge Graph',
    description: 'Link, traverse, and query — no external graph DB.',
    iconPath: 'M6 6h0M18 6h0M12 18h0M6 6l12 0M6 6l6 12M18 6l-6 12'
  },
  {
    title: 'Memory Decay Engine',
    description: 'Prune weak memories, surface the strongest.',
    iconPath: 'M3 20l4-8 4 4 4-12 4 6'
  },
  {
    title: 'Temporal Reasoning',
    description: 'Time-aware retrieval with natural language time parsing.',
    iconPath: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2'
  },
  {
    title: 'Multi-Hop Retrieval',
    description: 'Entity extraction + graph walk for complex reasoning.',
    iconPath: 'M4 4h4v4H4zM16 4h4v4h-4zM10 16h4v4h-4zM8 6h8M6 8v6l4 2M18 8v6l-4 2'
  },
  {
    title: 'Adaptive Context',
    description: 'Graph-expanded, deduplicated context with confidence gating.',
    iconPath: 'M3 3h18v18H3zM9 3v18M3 9h18M3 15h18'
  },
  {
    title: 'Async + Event Hooks',
    description: 'Full async API with lifecycle event hooks.',
    iconPath: 'M13 2L3 14h9l-1 8 10-12h-9l1-8'
  }
]

export const terminalOutput = [
  '$ pip install memblock',
  '>>> from memblock import MemBlock, BlockType',
  '>>> mem = MemBlock(storage="sqlite:///memory.db")',
  '>>> mem.store("User prefers dark mode", type=BlockType.PREFERENCE)',
  "Block(id='blk_7f2a', type=PREFERENCE, confidence=1.0)",
  '>>> mem.query(text_search="dark mode")',
  "[Block(id='blk_7f2a', content='User prefers dark mode')]",
  '>>> mem.build_context(query="user preferences", token_budget=2000)',
  "'[PREFERENCE] User prefers dark mode (confidence: 1.00)'"
]

export const footerColumns: FooterColumn[] = [
  {
    title: 'Platform',
    links: ['How It Works', 'Features', 'Benchmark']
  },
  {
    title: 'Developers',
    links: ['Documentation']
  },
  {
    title: 'Company',
    links: ['About']
  }
]
