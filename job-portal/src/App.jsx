import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Guide from "./components/Guide"
import CareerList from "./components/CareerList"
import JobListings from "./components/JobListings"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Guide />
      <CareerList />
      <JobListings />
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
