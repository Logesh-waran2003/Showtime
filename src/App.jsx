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
        {/* Services - Bento Grid */}
        <Hero />
        <ExperienceGrid />

        {/* Packages */}
        <CinematicFormats />

        {/* How It Works */}
        <Walkthrough />

        {/* Emotional Quote */}
        <BrandEmotional />

        {/* Social Proof */}
        <ReelsSection />
        <CommunityGallery />

        {/* Why Choose Us */}
        <Membership />

        {/* Call to Action */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
