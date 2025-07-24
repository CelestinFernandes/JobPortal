"use client"
import { useState, useEffect } from "react"

const GuideData = {
  title: "Get Hired in 4 Quick Easy Steps",
  description: "The quickest and most effective way to get hired by the top companies in the world",
  Guide: [
    {icon: "👤", title: "Create Account",
      description: "Sign up for a personalized account to access exclusive job opportunities and save your applications.",
    },
    {icon: "🔍", title: "Search Job",
      description: "Browse through thousands of job listings using our advanced search filters to find your perfect match.",
    },
    { icon: "📄", title: "Upload CV/Resume",
      description: "Upload your professional resume and let employers discover your skills and experience.",
    },
    { icon: "💼", title: "Get Job",
      description: "Apply directly to companies and secure your dream job with our streamlined application process.",
    },
  ],
}

const Guide = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")

  useEffect(() => {
    const handleStorageChange = () => setTheme(localStorage.getItem("theme") || "light")
    window.addEventListener("storage", handleStorageChange)
    const interval = setInterval(() => {
      const currentTheme = localStorage.getItem("theme") || "light"
      if (currentTheme !== theme) setTheme(currentTheme)
    }, 500)
    return () => {
      window.removeEventListener("storage", handleStorageChange)
      clearInterval(interval)
    }}, [theme])

  return (
    <section id="about" className="section" style={{ background: theme === "dark" ? "#374151" : "#f9fafb" }}>
      <div className="container">
        <div className="section-title">
          <h2 className="font-semibold" style={{ color: theme === "dark" ? "#FFFFFF" : "#222222" }}>Get Hired in 4 Quick <span style={{ color: "#6A38C2" }}>Easy Guide</span></h2>
          <p style={{ color: theme === "dark" ? "#FFFFFF" : "#222222" }}>{GuideData.description}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "40px", flexWrap: "wrap" }}>
          {GuideData.Guide.map((step, index) => (
            <div key={index} style={{ flex: "1", minWidth: "200px", textAlign: "center", position: "relative" }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#6A38C2", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "32px" }}>
                {step.icon}
              </div>
              <h3 style={{ fontSize: "21px", fontWeight: "bold", marginBottom: "12px", color: theme === "dark" ? "#FFFFFF" : "#222222" }}>{step.title}</h3>
              <p style={{ color: theme === "dark" ? "#FFFFFF" : "#222222", lineHeight: "1.6", fontSize: "14px" }}>{step.description}</p>
              {index < GuideData.Guide.length - 1 && (
                <div style={{ position: "absolute", top: "40px", right: "-20px", width: "40px", height: "2px", background: "#e5e7eb", display: window.innerWidth > 768 ? "block" : "none" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Guide