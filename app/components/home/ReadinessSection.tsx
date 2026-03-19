import { CSSProperties } from 'react'
import { type CapabilityItem } from '../../home-data'
import LineIcon from './LineIcon'

type FeaturesSectionProps = {
  features: CapabilityItem[]
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section id="features" className="section section-alt">
      <div className="content-shell">
        <p className="micro-label">Core Capabilities</p>
        <h2 className="section-title reveal">Everything an agent needs to remember</h2>
        <p className="section-copy">
          Nine core primitives that give your AI agents structured, searchable, and secure
          long-term memory — now with temporal reasoning and multi-hop retrieval.
        </p>

        <div className="card-grid">
          {features.map((item, index) => (
            <article
              key={item.title}
              className="surface-card reveal"
              style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
            >
              <div className="card-head">
                <LineIcon path={item.iconPath} />
                {item.isNew && <span className="new-pill">NEW</span>}
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-copy">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
