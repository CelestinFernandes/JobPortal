"use client"

const Nav = ({ theme, isMobile = false, onNavigate }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
    if (onNavigate) onNavigate()
  }

  const navItems = [
    { label: "Home", sectionId: "home" },
    { label: "About", sectionId: "about" },
    { label: "Jobs", sectionId: "jobs" },
    { label: "Services", sectionId: "services" },
    { label: "Contact Us", sectionId: "contact" },
  ]

  return (
    <div style={{ display: "flex", gap: isMobile ? "8px" : "24px", flexDirection: isMobile ? "column" : "row" }}>
      {navItems.map((item) => (
        <button
          key={item.sectionId}
          onClick={() => scrollToSection(item.sectionId)}
          style={{
            background: "none",
            border: "none",
            textDecoration: "none",
            color: theme === "dark" ? "#FFFFFF" : "#222222",
            fontWeight: "500",
            cursor: "pointer",
            padding: isMobile ? "12px 16px" : "8px 0",
            fontSize: "16px",
            transition: "all 0.3s ease",
            textAlign: "left",
            width: "100%",
            borderRadius: isMobile ? "6px" : "0",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#6A38C2"
            if (isMobile)
              e.target.style.background = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(106, 56, 194, 0.1)"
          }}
          onMouseLeave={(e) => {
            e.target.style.color = theme === "dark" ? "#FFFFFF" : "#222222"
            if (isMobile) e.target.style.background = "none"
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
export default Nav