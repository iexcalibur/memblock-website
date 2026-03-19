import { features, footerColumns, navItems, terminalOutput } from './home-data'
import HeroSection from './components/home/HeroSection'
import MegaFooter from './components/home/MegaFooter'
import QuickstartSection from './components/home/QuickstartSection'
import FeaturesSection from './components/home/ReadinessSection'
import TopNav from './components/home/TopNav'
import BlockBuilderSection from './components/home/BlockBuilderSection'
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
        <FeaturesSection features={features} />
        <UseCasesSection />
        <QuickstartSection terminalOutput={terminalOutput} />
      </main>

      <MegaFooter columns={footerColumns} />
    </div>
  )
}
