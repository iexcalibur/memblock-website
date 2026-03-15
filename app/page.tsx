import { features, footerColumns, navItems, terminalOutput } from './home-data'
import HeroSection from './components/home/HeroSection'
import MegaFooter from './components/home/MegaFooter'
import QuickstartSection from './components/home/QuickstartSection'
import FeaturesSection from './components/home/ReadinessSection'
import TopNav from './components/home/TopNav'

export default function HomePage() {
  return (
    <div className="page">
      <TopNav navItems={navItems} />

      <main>
        <HeroSection />
        <FeaturesSection features={features} />
        <QuickstartSection terminalOutput={terminalOutput} />
      </main>

      <MegaFooter columns={footerColumns} />
    </div>
  )
}
