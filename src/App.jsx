import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExperienceGrid from './components/ExperienceGrid'
import CinematicFormats from './components/CinematicFormats'
import Walkthrough from './components/Walkthrough'
import BrandEmotional from './components/BrandEmotional'
import Membership from './components/Membership'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import ReelsSection from './components/ReelsSection'
import CommunityGallery from './components/CommunityGallery'

function App() {
  return (
    <div className="dark relative">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <ExperienceGrid />
        <CinematicFormats />
        <Walkthrough />
        <BrandEmotional />
        <ReelsSection />
        <CommunityGallery />
        <Membership />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
