"use client"
import { useState, useEffect } from "react"

const categoriesData = {
  title: "Countless Career Options Are Waiting For You to Explore",
  categories: [
    { name: "Design", count: "235 Jobs available", color: "#ef4444", icon: "🎨" },
    { name: "Sales", count: "756 Jobs available", color: "#8b5cf6", icon: "💼" },
    { name: "Marketing", count: "140 Jobs available", color: "#f59e0b", icon: "📈" },
    { name: "Finance", count: "325 Jobs available", color: "#10b981", icon: "💰" },
    { name: "Automobile", count: "436 Jobs available", color: "#3b82f6", icon: "🚗" },
    { name: "Logistics/Delivery", count: "183 Jobs available", color: "#06b6d4", icon: "🚚" },
    { name: "Admin", count: "567 Jobs available", color: "#8b5cf6", icon: "⚙️" },
    { name: "Construction", count: "297 Jobs available", color: "#f97316", icon: "🏗️" }
  ]
}

const CareerList = () => {
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
      clearInterval(interval)}}, [theme])

  return (
    <section id="jobs" className="section" style={{ background: theme === "dark" ? "#222222" : "white" }}>
      <div className="container">
        <div className="section-title">
          <h2 className="font-semibold" style={{ color: theme === "dark" ? "#FFFFFF" : "#6A38C2" }}>
            Countless Career Options <span style={{ color: "#6A38C2" }}>Are Waiting For You to Explore</span>
          </h2>
        </div>
        <div className="grid grid-4">
          {categoriesData.categories.map((category, index) => (
            <div
              key={index}
              className="card"
              style={{
                textAlign: "center",
                background: theme === "dark" ? "#374151" : "white",
                transition: "all 0.3s ease",
                cursor: "pointer"}}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#6A38C2"
                e.currentTarget.style.color = "#FFFFFF"}}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = theme === "dark" ? "#374151" : "white"
                e.currentTarget.style.color = theme === "dark" ? "#FFFFFF" : "#222222"}}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>{category.icon}</div>
              <h3 style={{ fontSize: "19px", fontWeight: "bold", marginBottom: "8px", color: category.color }}>{category.name}</h3>
              <p style={{ color: theme === "dark" ? "#FFFFFF" : "#222222", fontSize: "14px" }}>{category.count}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button className="btn btn-primary">Browse All Categories</button>
        </div>
      </div>
    </section>
  )
}

export default CareerList