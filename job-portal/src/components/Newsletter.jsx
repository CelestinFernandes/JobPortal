"use client"
import { useState, useEffect } from "react"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    const onStorageChange = () => {
      const updatedTheme = localStorage.getItem("theme") || "light"
      setTheme(updatedTheme)
    }
    window.addEventListener("storage", onStorageChange)
    const themeChecker = setInterval(() => {
      const current = localStorage.getItem("theme") || "light"
      if (current !== theme) setTheme(current)
    }, 100)
    return () => {
      window.removeEventListener("storage", onStorageChange)
      clearInterval(themeChecker)
    }
  }, [theme])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for subscribing!")
    setEmail("")
  }

  return (
    <section style={{ background: theme === "dark" ? "#222222" : "#3a3a3a", padding: "80px 0", color: "white" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "40px", background: theme === "dark" ? "#333333" : "#4a4a4a", borderRadius: "16px", padding: "60px" }}>
          <div style={{ flex: "1", minWidth: "300px" }}>
            <h2 style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "16px" }}>Get Latest Job Updates</h2>
            <p style={{ fontSize: "18px", marginBottom: "32px", maxWidth: "400px" }}>Subscribe to our newsletter and get notified about the latest job opportunities from top companies.</p>
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "12px", flexWrap: "wrap", maxWidth: "400px" }}>
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ flex: "1", padding: "12px 16px", border: "none", borderRadius: "6px", fontSize: "16px", minWidth: "200px" }} />
              <button type="submit" style={{ background: "#6A38C2", color: "white", padding: "12px 24px", border: "none", borderRadius: "6px", fontSize: "16px", cursor: "pointer" }}>Subscribe</button>
            </form>
          </div>
          <div style={{ flex: "1", minWidth: "300px", textAlign: "right" }}>
            <img src="/maninsuit.jpg" alt="Professional man in business attire" style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter