"use client"
import { useState, useEffect } from "react"
import Logo from "./Logo"
import Nav from "./Nav"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
      if (window.innerWidth > 768) setIsMenuOpen(false)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
    if (isMobile) setIsMenuOpen(false)
  }

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header style={{ background: theme === "dark" ? "#222222" : "white", boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)", position: "sticky", top: 0, zIndex: 1000 }}>
      <div className="container">
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0" }}>
          <Logo />
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
              <Nav theme={theme} isMobile={false} onNavigate={closeMenu} />
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <button onClick={toggleTheme} style={{ background: "none", border: `2px solid ${theme === "dark" ? "#FFFFFF" : "#6A38C2"}`, borderRadius: "6px", padding: "8px 12px", cursor: "pointer", fontSize: "16px", color: theme === "dark" ? "#FFFFFF" : "#6A38C2", transition: "all 0.3s ease" }}>
                  {theme === "light" ? "🌙" : "☀️"}
                </button>
                <a href="#login" className="btn btn-outline" style={{ padding: "8px 20px" }}>Login</a>
                <a href="#signup" className="btn btn-primary" style={{ padding: "8px 20px" }}>Register</a>
              </div>
            </div>
          )}
          {isMobile && (
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer", color: theme === "dark" ? "#FFFFFF" : "#222222", padding: "8px", zIndex: 1001 }}>
              {isMenuOpen ? "✕" : "☰"}
            </button>
          )}
        </nav>
        {isMobile && isMenuOpen && (
          <>
            <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0, 0, 0, 0.5)", zIndex: 999 }} onClick={closeMenu} />
            <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: theme === "dark" ? "#222222" : "white", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)", borderTop: `1px solid ${theme === "dark" ? "#374151" : "#e5e7eb"}`, zIndex: 1000, maxHeight: "80vh", overflowY: "auto" }}>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ marginBottom: "16px" }}>
                  <Nav theme={theme} isMobile={true} onNavigate={closeMenu} />
                </div>
                <div style={{ height: "1px", background: theme === "dark" ? "#374151" : "#e5e7eb", margin: "8px 0" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <button onClick={toggleTheme} style={{ background: "none", border: `2px solid ${theme === "dark" ? "#FFFFFF" : "#6A38C2"}`, borderRadius: "6px", padding: "12px 16px", cursor: "pointer", fontSize: "16px", color: theme === "dark" ? "#FFFFFF" : "#6A38C2", transition: "all 0.3s ease", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                    {theme === "light" ? "🌙" : "☀️"} {theme === "light" ? "Dark Mode" : "Light Mode"}
                  </button>
                  <a href="#login" className="btn btn-outline" onClick={closeMenu} style={{ padding: "12px 16px", width: "100%", textAlign: "center", textDecoration: "none", display: "block" }}>Login</a>
                  <a href="#signup" className="btn btn-primary" onClick={closeMenu} style={{ padding: "12px 16px", width: "100%", textAlign: "center", textDecoration: "none", display: "block" }}>Register</a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
