"use client"
import { useState, useEffect } from "react"

const servicesData = {
  title: "What We Offer",
  description: "Job Portal is the right platform for you to get various job recommendations, get career counseling, and find your ideal job profile.",
  services: [
    { image: "/placeholder.svg?height=200&width=400",
      title: "Job Recommendation",
      description: "Set your job preferences and get notified of the best fit job recommendations.",
    },
    { image: "/placeholder.svg?height=200&width=400",
      title: "Create & Build Profile",
      description: "Build a compelling professional profile that showcases your skills and attracts employers.",
    },
    { image: "/placeholder.svg?height=200&width=400",
      title: "Career Consultation",
      description: "Get expert career advice and guidance to help you make informed career decisions.",
    },
  ],
}

const Services = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")

  useEffect(() => {
    const handleStorageChange = () => setTheme(localStorage.getItem("theme") || "light")
    window.addEventListener("storage", handleStorageChange)
    const interval = setInterval(() => {
      const currentTheme = localStorage.getItem("theme") || "light"
      if (currentTheme !== theme) setTheme(currentTheme)
    }, 100)
    return () => {
      window.removeEventListener("storage", handleStorageChange)
      clearInterval(interval)
    }}, [theme])

  return (
    <section id="services" className="section" style={{ background: theme === "dark" ? "#222222" : "white" }}>
      <div className="container">
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "40px", fontWeight: "bold", color: theme === "dark" ? "#FFFFFF" : "#222222", marginBottom: "16px", textAlign: "left" }}>
            {servicesData.title}</h2>
          <p style={{ color: theme === "dark" ? "#FFFFFF" : "#6b7280", fontSize: "18px", textAlign: "left", maxWidth: "600px" }}>
            {servicesData.description}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
          {servicesData.services.map((service, index) => (
            <div key={index} style={{ textAlign: "left" }}>
              <div style={{ width: "100%", height: "200px", borderRadius: "12px", overflow: "hidden", marginBottom: "20px", background: "#f3f4f6" }}>
                <img src={service.image || "/placeholder.svg"} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "60px", height: "60px", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: "bold", color: theme === "dark" ? "#FFFFFF" : "#222222" }}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div style={{ width: "8px", height: "40px", background: "#6A38C2", borderRadius: "2px" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "21px", fontWeight: "bold", color: theme === "dark" ? "#FFFFFF" : "#222222", marginBottom: "8px" }}>
                    {service.title}</h3>
                  <p style={{ color: theme === "dark" ? "#FFFFFF" : "#6b7280", lineHeight: "1.6", fontSize: "15px" }}>
                    {service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services