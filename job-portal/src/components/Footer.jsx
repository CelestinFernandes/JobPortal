"use client"
import { useState, useEffect } from "react"
import Logo from "./Logo"

const Footer = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")
  const [isMobile, setIsMobile] = useState(false)

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
    }
  }, [theme])

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768)
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const footerLinks = [
    { title: "Quick Links", links: ["About", "Contact", "Admin"] },
    { title: "Legal", links: ["Terms of use", "Legal Center", "Privacy Policy", "Complaints"] },
    { title: "Follow Us", links: ["Facebook", "Instagram", "LinkedIn", "Twitter", "YouTube"] },
  ]

  return (
    <footer id="contact" style={{ background: theme === "dark" ? "#222222" : "white", borderTop: `1px solid ${theme === "dark" ? "#374151" : "#e5e7eb"}`, padding: isMobile ? "40px 0" : "64px 0" }}>
      <div className="container">
        <div style={{ display: isMobile ? "flex" : "grid", gridTemplateColumns: isMobile ? "none" : "2fr 1fr 1fr 1fr 1fr", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "24px" : "32px", marginBottom: isMobile ? "32px" : "48px" }}>
          <div style={{ marginBottom: isMobile ? "20px" : "0" }}>
            <div style={{ marginBottom: "16px" }}><Logo /></div>
            <p style={{ color: theme === "dark" ? "#FFFFFF" : "#222222", marginBottom: "16px", maxWidth: isMobile ? "100%" : "400px", fontSize: isMobile ? "14px" : "16px", lineHeight: "1.6" }}>
              JobHunt is a leading job portal that connects talented professionals with top companies worldwide. Find your dream job today!
            </p>
          </div>
          {footerLinks.map((section, index) => (
            <div key={index} style={{ marginBottom: isMobile ? "20px" : "0" }}>
              <h3 style={{ fontWeight: "bold", color: theme === "dark" ? "white" : "#222222", marginBottom: "16px", fontSize: isMobile ? "16px" : "18px" }}>{section.title}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {section.links.map((link) => (
                  <a key={link} href="#" style={{ color: theme === "dark" ? "#FFFFFF" : "#222222", textDecoration: "none", fontSize: isMobile ? "14px" : "16px", transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => (e.target.style.color = "#6A38C2")}
                    onMouseLeave={(e) => (e.target.style.color = theme === "dark" ? "#FFFFFF" : "#222222")}
                  >{link}</a>
                ))}
              </div>
            </div>
          ))}
          <div>
            <h3 style={{ fontWeight: "bold", color: theme === "dark" ? "white" : "#222222", marginBottom: "16px", fontSize: isMobile ? "16px" : "18px" }}>Contact Us</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ color: theme === "dark" ? "#FFFFFF" : "#222222", fontSize: isMobile ? "14px" : "16px", margin: 0 }}>📞 +(30)123-0405</p>
              <p style={{ color: theme === "dark" ? "#FFFFFF" : "#222222", fontSize: isMobile ? "14px" : "16px", margin: 0 }}>📍 Washington Ave. Something, 123456</p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: isMobile ? "center" : "space-between", alignItems: "center", borderTop: `1px solid ${theme === "dark" ? "#374151" : "#e5e7eb"}`, paddingTop: isMobile ? "20px" : "32px", color: theme === "dark" ? "#FFFFFF" : "#222222", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "12px" : "16px", textAlign: isMobile ? "center" : "left" }}>
          <p style={{ margin: 0, fontSize: isMobile ? "14px" : "16px" }}>&copy; 2024 JobHunt. All rights reserved.</p>
          <a href="/terms" style={{ color: theme === "dark" ? "#FFFFFF" : "#222222", textDecoration: "none", fontSize: isMobile ? "14px" : "16px", transition: "color 0.3s ease" }}
            onMouseEnter={(e) => (e.target.style.color = "#6A38C2")}
            onMouseLeave={(e) => (e.target.style.color = theme === "dark" ? "#FFFFFF" : "#222222")}
          >Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}
export default Footer