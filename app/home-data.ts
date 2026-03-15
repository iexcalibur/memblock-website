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

export const navItems = ['FEATURES', 'QUICKSTART', 'GITHUB', 'COMPANY']

export const features: CapabilityItem[] = [
  {
    title: 'Typed Memory Blocks',
    description:
      '5 structured types — FACT, PREFERENCE, EVENT, ENTITY, RELATION. Schema-validated, not untyped text blobs.',
    iconPath: 'M4 6h16M4 10h16M4 14h10M4 18h6'
  },
  {
    title: 'Per-Block Encryption',
    description:
      'AES-256 with three levels: NONE, STANDARD, SENSITIVE. Encrypt what matters, leave the rest fast.',
    iconPath: 'M12 2L4 7v6c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12V7l-8-5z'
  },
  {
    title: 'Knowledge Graph',
    description:
      'Built-in graph index with link, traverse, and neighbor queries. No Neo4j or external graph DB required.',
    iconPath: 'M6 6h0M18 6h0M12 18h0M6 6l12 0M6 6l6 12M18 6l-6 12'
  },
  {
    title: 'Memory Decay Engine',
    description:
      'Exponential decay with configurable rates. Prune weak memories, surface the strongest automatically.',
    iconPath: 'M3 20l4-8 4 4 4-12 4 6'
  },
  {
    title: 'Tamper Detection',
    description:
      'SHA-256 hash-chained operation log. One call to verify() catches any unauthorized modification.',
    iconPath: 'M9 12l2 2 4-4M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z'
  },
  {
    title: 'Async + Event Hooks',
    description:
      'Full async API via AsyncMemBlock. Lifecycle hooks for on_add, on_update, on_delete, on_query.',
    iconPath: 'M13 2L3 14h9l-1 8 10-12h-9l1-8',
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
    links: ['Features', 'Quickstart', 'Roadmap', 'Changelog']
  },
  {
    title: 'Developers',
    links: ['GitHub', 'PyPI', 'SDK Reference', 'Examples']
  },
  {
    title: 'Security',
    links: ['Encryption', 'Tamper Detection', 'Access Scoping']
  },
  {
    title: 'Company',
    links: ['About', 'Contact', 'Legal']
  }
]
