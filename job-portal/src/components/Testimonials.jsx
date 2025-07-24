"use client"
import { useState, useEffect } from "react"
import testimonialsData from "../data/testimonials.json"

const Testimonials = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

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
    }
  }, [theme])

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.testimonials.length)
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.testimonials.length) % testimonialsData.testimonials.length)
  const goToTestimonial = (index) => setCurrentTestimonial(index)

  return (
    <section className="section" style={{ background: theme === "dark" ? "#374151" : "#f9fafb" }}>
      <div className="container">
        <div className="section-title">
          <h2 className="font-semibold" style={{ color: theme === "dark" ? "#FFFFFF" : "#222222" }}>{testimonialsData.title}</h2>
          <p style={{ color: theme === "dark" ? "#FFFFFF" : "#6b7280" }}>{testimonialsData.description}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginBottom: "40px" }}>
          <button onClick={prevTestimonial} style={{ background: "none", border: "none", fontSize: "24px", color: theme === "dark" ? "#FFFFFF" : "#6b7280", cursor: "pointer", padding: "8px" }}>‹</button>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            {testimonialsData.testimonials.map((testimonial, index) => (
              <button key={testimonial.id} onClick={() => goToTestimonial(index)} style={{ background: "none", border: "none", cursor: "pointer", padding: "0", borderRadius: "50%", overflow: "hidden", opacity: index === currentTestimonial ? 1 : 0.6, transform: index === currentTestimonial ? "scale(1.1)" : "scale(1)", transition: "all 0.3s ease" }}>
                <img src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", border: index === currentTestimonial ? "3px solid #6A38C2" : "3px solid transparent" }} />
              </button>
            ))}
          </div>
          <button onClick={nextTestimonial} style={{ background: "none", border: "none", fontSize: "24px", color: theme === "dark" ? "#FFFFFF" : "#6b7280", cursor: "pointer", padding: "8px" }}>›</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ background: "linear-gradient(135deg, #6A38C2, #8B5CF6)", borderRadius: "20px", padding: "60px 40px", maxWidth: "800px", width: "100%", color: "white", textAlign: "center", position: "relative", boxShadow: "0 20px 40px rgba(106, 56, 194, 0.3)" }}>
            <div style={{ position: "absolute", top: "-15px", left: "50%", transform: "translateX(-50%)", width: "0", height: "0", borderLeft: "15px solid transparent", borderRight: "15px solid transparent", borderBottom: "15px solid #6A38C2" }} />
            <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "30px", fontStyle: "italic" }}>"{testimonialsData.testimonials[currentTestimonial].text}"</p>
            <div style={{ marginBottom: "20px" }}>
              {[...Array(testimonialsData.testimonials[currentTestimonial].rating)].map((_, i) => (
                <span key={i} style={{ color: "#FFD700", fontSize: "20px", marginRight: "4px" }}>⭐</span>
              ))}
            </div>
            <h4 style={{ fontSize: "21px", fontWeight: "bold", marginBottom: "4px" }}>{testimonialsData.testimonials[currentTestimonial].name}</h4>
            <p style={{ opacity: 0.9, fontSize: "16px" }}>{testimonialsData.testimonials[currentTestimonial].title}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials