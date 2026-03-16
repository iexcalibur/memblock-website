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
    title: 'Typed Memory Blocks',
    description: 'Schema-validated, not untyped text blobs.',
    iconPath: 'M4 6h16M4 10h16M4 14h10M4 18h6'
  },
  {
    title: 'Per-Block Encryption',
    description: 'Encrypt what matters, leave the rest fast.',
    iconPath: 'M12 2L4 7v6c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12V7l-8-5z'
  },
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
    title: 'Tamper Detection',
    description: 'One call catches any unauthorized modification.',
    iconPath: 'M9 12l2 2 4-4M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z'
  },
  {
    title: 'Async + Event Hooks',
    description: 'Full async API with lifecycle event hooks.',
    iconPath: 'M13 2L3 14h9l-1 8 10-12h-9l1-8'
  },
  {
    title: 'Org-Level Analytics',
    description: 'Track questions across all users — deduplicated, trended, noise-filtered.',
    iconPath: 'M3 3v18h18M7 16l4-4 4 4 5-6',
    isNew: true
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
    links: ['How It Works', 'Features', 'Documentation']
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
