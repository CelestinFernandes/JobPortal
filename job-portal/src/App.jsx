"use client"
import { useState } from "react"
import Header from "./components/header"
import HeroSection from "./components/HeroSection"
import Footer from "./components/Footer"
import JobCat from "./components/JobCat"
import GetHired from "./components/GetHired"
import Testimonials from "./components/Testimonials"
import Newsletter from "./components/Newsletter"
import Services from "./components/Services"

export default function JobHuntWebsite() {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark(!isDark)
  return (
    <div className={`min-h-screen scroll-smooth ${isDark ? "dark bg-gray-900" : "bg-white"}`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <HeroSection isDark={isDark} />
      <JobCat isDark={isDark} />
      <GetHired isDark={isDark} />
      <Services isDark={isDark} />
      <Newsletter isDark={isDark} />
      <Testimonials isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  )
}
