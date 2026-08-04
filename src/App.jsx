import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExperienceGrid from './components/ExperienceGrid'
import CustomerReviews from './components/CustomerReviews'
import Walkthrough from './components/Walkthrough'
import BrandEmotional from './components/BrandEmotional'
import Membership from './components/Membership'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import ReelsSection from './components/ReelsSection'
import InstagramDome from './components/InstagramDome'
import FloatingSocial from './components/FloatingSocial'

function App() {
  return (
    <div className="dark relative">
      <ParticleBackground />
      <Navbar />
      <FloatingSocial />
      <main>
        {/* Services - Bento Grid */}
        <Hero />
        <ExperienceGrid />

        {/* Packages */}
        <CustomerReviews />

        {/* How It Works */}
        <Walkthrough />

        {/* Emotional Quote */}
        <BrandEmotional />

        {/* Social Proof */}
        <ReelsSection />
        <InstagramDome />

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
