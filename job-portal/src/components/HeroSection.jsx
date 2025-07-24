"use client"
import { useState, useEffect } from "react"
import { FaGoogle, FaTwitter, FaLinkedin, FaMicrosoft, FaApple, FaAmazon } from "react-icons/fa"

const HeroSection = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")

  useEffect(() => {
    const checkTheme = () => {
      const current = localStorage.getItem("theme") || "light"
      if (current !== theme) setTheme(current)}
      
    const interval = setInterval(checkTheme, 500)
    window.addEventListener("storage", checkTheme)
    return () => {
      clearInterval(interval)
      window.removeEventListener("storage", checkTheme)
    }}, [theme])

  const topRow = ["Artificial Intelligence", "Lead Software Engineer", "Computer Science Developer", "Backend Developer", "UI Designer", "Frontend Developer"]
  const bottomRow = ["Digital Developer", "Backend Developer", "Bank and Developer", "Graphic Designer", "Social services"]

  const iconList = [
    { icon: <FaGoogle />, style: { top: "10%", left: "10%", color: "#4285f4" } },
    { icon: <FaTwitter />, style: { top: "15%", right: "15%", color: "#1da1f2" } },
    { icon: <FaLinkedin />, style: { top: "25%", left: "20%", color: "#0077b5" } },
    { icon: <FaMicrosoft />, style: { top: "30%", right: "25%", color: "#00a1f1" } },
    { icon: <FaApple />, style: { top: "40%", left: "15%", color: "#000000" } },
    { icon: <FaAmazon />, style: { top: "45%", right: "20%", color: "#ff9900" } },
  ]

  const categoryStyle = {
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    backdropFilter: "blur(10px)",
    display: "inline-block",
    minWidth: "fit-content",
  }

  const getCategoryColor = () => ({
    background: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(139,92,246,0.1)",
    color: theme === "dark" ? "#e5e7eb" : "#6A38C2",
    border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(139,92,246,0.2)"}`,
  })

  return (
    <section
      id="home"
      style={{
        background: theme === "dark" ? "#222222" : "#f8fafc",
        padding: "100px 0",
        color: theme === "dark" ? "#FFFFFF" : "#222222",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {iconList.map((item, i) => (
        <div key={i} style={{ position: "absolute", fontSize: "2rem", ...item.style }}>{item.icon}</div>
      ))}

      <div className="container">
        <div style={{ marginBottom: "60px", position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: "16px" }}>
            <span style={{
              background: "#fef3c7",
              color: "#92400e",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: "500",
            }}>🎯 No.1 Job Hunt Website</span>
          </div>

          <h1 style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            marginBottom: "24px",
            lineHeight: "1.2",
            color: theme === "dark" ? "white" : "#222222"
          }}>Search, Apply &<br />Get Your <span style={{ color: "#FA4E09" }}>Dream Job</span></h1>

          <p style={{
            fontSize: "1.1rem",
            marginBottom: "40px",
            opacity: 0.8,
            maxWidth: "600px",
            margin: "0 auto 40px",
            color: theme === "dark" ? "#FFFFFF" : "#6b7280",
          }}>Start your hunt for the best, life-changing career opportunities from here in your selected areas conveniently and get hired quickly.</p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <button className="btn btn-primary"
              style={{ background: "#6A38C2", color: "white", padding: "12px 32px", fontSize: "1.1rem", border: "none", borderRadius: "8px" }}>Browse Jobs
            </button>
            <button style={{
              background: "transparent",
              color: theme === "dark" ? "#e5e7eb" : "#6b7280",
              padding: "12px 24px",
              fontSize: "1.1rem",
              border: "none",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}>
              <span style={{
                background: "#6A38C2",
                color: "white",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>▶</span>How It Works?</button>
          </div>
        </div>

        <div style={{ marginTop: "60px", position: "relative" }}>
          {/* Top Row */}
          <div style={{
            display: "flex",
            gap: "12px",
            marginBottom: "16px",
            animation: "scrollLeft 20s linear infinite",
            whiteSpace: "nowrap",
          }}>
            {[...topRow, ...topRow].map((cat, i) => (
              <span key={i} style={{ ...categoryStyle, ...getCategoryColor() }}>{cat}</span>
            ))}
          </div>

          {/* Bottom Row */}
          <div style={{
            display: "flex",
            gap: "12px",
            animation: "scrollRight 25s linear infinite",
            whiteSpace: "nowrap",
          }}>
            {[...bottomRow, ...bottomRow].map((cat, i) => (
              <span key={i} style={{ ...categoryStyle, ...getCategoryColor() }}>{cat}</span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
      `}</style>
    </section>
  )
}
export default HeroSection