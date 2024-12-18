import CallToAction from "@/components/CallToStart"
import HeroSection from "@/components/HeroSection"
import IdeaProcessSection from "@/components/IdeaProcessSection"
import KeyFeatures from "@/components/KeyFeatures"
import Testimonials from "@/components/Testimonals"


const UserHome = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Key Features Section */}
      <KeyFeatures />

      {/* Testimonials Section */}
      <Testimonials />
      <IdeaProcessSection />
      {/* Call-to-Action Section */}
      <CallToAction />
    </div>
  )
}

export default UserHome