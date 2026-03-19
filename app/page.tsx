import { features, footerColumns, navItems } from './home-data'
import HeroSection from './components/home/HeroSection'
import MegaFooter from './components/home/MegaFooter'
import QuickstartSection from './components/home/QuickstartSection'
import FeaturesSection from './components/home/ReadinessSection'
import TopNav from './components/home/TopNav'
import BenchmarkSection from './components/home/BenchmarkSection'
import BlockBuilderSection from './components/home/BlockBuilderSection'
import MemoryFlowSection from './components/home/MemoryFlowSection'
import ProductionSection from './components/home/ProductionSection'
import UseCasesSection from './components/home/UseCasesSection'
import WorkflowSection from './components/home/WorkflowSection'

export default function HomePage() {
  return (
    <div className="page">
      <TopNav navItems={navItems} />

      <main>
        <HeroSection />
        <WorkflowSection />
        <BlockBuilderSection />
        <MemoryFlowSection />
        <FeaturesSection features={features} />
        <ProductionSection />
        <UseCasesSection />
        <BenchmarkSection />
        <QuickstartSection />
      </main>

      <MegaFooter columns={footerColumns} />
    </div>
  )
}
