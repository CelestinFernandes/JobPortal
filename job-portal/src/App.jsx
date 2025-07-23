"use client"
import { useState } from "react"
import Header from "./components/header"
import HeroSection from "./components/HeroSection"
import JobCat from "./components/JobCat"
import GetHiredSteps from "./components/GetHired"
import CareerOptions from "./components/CareerOptions"
import JobListings from "./components/JobListings"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"

export default function JobHuntWebsite() {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark(!isDark)
  return (
    <div className={`min-h-screen scroll-smooth transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <HeroSection isDark={isDark} />
      <JobCat isDark={isDark} />
      <GetHiredSteps isDark={isDark} />
      <CareerOptions isDark={isDark} />
      <JobListings isDark={isDark} />
      <Services isDark={isDark} />
      <Testimonials isDark={isDark} />
      <Newsletter isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  )}