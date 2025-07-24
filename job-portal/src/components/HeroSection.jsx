import React, { useState, useEffect } from "react";
import { FaGoogle, FaTwitter, FaLinkedin, FaMicrosoft, FaApple, FaAmazon } from "react-icons/fa";

function HeroSection() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    function handleStorageChange() {
      setTheme(localStorage.getItem("theme") || "light");
    }
    window.addEventListener("storage", handleStorageChange);
    const intervalId = setInterval(() => {
      const currentTheme = localStorage.getItem("theme") || "light";
      if (currentTheme !== theme) setTheme(currentTheme);
    }, 100);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(intervalId);
    };
  }, [theme]);

  const topRowCategories = ["Artificial Intelligence","Lead Software Engineer","Computer Science Developer","Backend Developer","UI Designer","Frontend Developer"];

  const bottomRowCategories = ["Digital Developer","Backend Developer","Bank and Developer","Graphic Designer","Social services"];

  return (
    <section id="home"
      style={{
        background: theme === "dark" ? "#222" : "#f8fafc",
        padding: "100px 0",
        color: theme === "dark" ? "#fff" : "#222",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      }}>
      <div style={{ position: "absolute", top: "10%", left: "10%", fontSize: 32, color: "#4285f4" }}><FaGoogle /></div>
      <div style={{ position: "absolute", top: "15%", right: "15%", fontSize: 32, color: "#1da1f2" }}><FaTwitter /></div>
      <div style={{ position: "absolute", top: "25%", left: "20%", fontSize: 32, color: "#0077b5" }}><FaLinkedin /></div>
      <div style={{ position: "absolute", top: "30%", right: "25%", fontSize: 32, color: "#00a1f1" }}><FaMicrosoft /></div>
      <div style={{ position: "absolute", top: "40%", left: "15%", fontSize: 32, color: "#000" }}><FaApple /></div>
      <div style={{ position: "absolute", top: "45%", right: "20%", fontSize: 32, color: "#ff9900" }}><FaAmazon /></div>

      <div className="container">
        <div style={{ marginBottom: 60, position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: 16 }}>
            <span style={{
                background: "#fef3c7",
                color: "#92400e",
                padding: "6px 12px",
                borderRadius: 20,
                fontSize: 14,
                fontWeight: 500,
              }}
            >🎯 No.1 Job Hunt Website</span>
          </div>
          <h1 style={{
              fontSize: 56,
              fontWeight: "bold",
              marginBottom: 24,
              lineHeight: 1.2,
              color: theme === "dark" ? "#fff" : "#222" }}> Search, Apply &<br/>Get Your <span style={{ color: "#FA4E09" }}>Dream Job</span>
          </h1>
          <p style={{
              fontSize: 18,
              marginBottom: 40,
              opacity: 0.8,
              maxWidth: 600,
              margin: "0 auto 40px",
              color: theme === "dark" ? "#fff" : "#6b7280" }}>
            Start your hunt for the best, life-changing career opportunities from here in your selected areas conveniently and get hired quickly.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <button className="btn btn-primary"
              style={{
                background: "#6A38C2",
                color: "#fff",
                padding: "12px 32px",
                fontSize: 18,
                border: "none",
                borderRadius: 8,
              }}>
              Browse Jobs</button>
            <button style={{
                background: "transparent",
                color: theme === "dark" ? "#e5e7eb" : "#6b7280",
                padding: "12px 24px",
                fontSize: 18,
                border: "none",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
              }}>
              <span style={{
                  background: "#6A38C2",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>▶</span>{" "}How It Works?
            </button>
          </div>
        </div>

        <div style={{ marginTop: 60, position: "relative" }}>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 16,
              animation: "scrollLeft 20s linear infinite",
              whiteSpace: "nowrap",
            }}>
            {[...topRowCategories, ...topRowCategories].map((category, index) => (
              <span
                key={index}
                style={{
                  background: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(139,92,246,0.1)",
                  color: theme === "dark" ? "#e5e7eb" : "#6A38C2",
                  padding: "8px 16px",
                  borderRadius: 20,
                  fontSize: 14,
                  backdropFilter: "blur(10px)",
                  display: "inline-block",
                  minWidth: "fit-content",
                  border: theme === "dark"
                    ? "1px solid rgba(255,255,255,0.2)"
                    : "1px solid rgba(139,92,246,0.2)",
                }}>{category}</span>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              animation: "scrollRight 25s linear infinite",
              whiteSpace: "nowrap",
            }}>
            {[...bottomRowCategories, ...bottomRowCategories].map((category, index) => (
              <span
                key={index}
                style={{
                  background: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(139,92,246,0.1)",
                  color: theme === "dark" ? "#e5e7eb" : "#6A38C2",
                  padding: "8px 16px",
                  borderRadius: 20,
                  fontSize: 14,
                  backdropFilter: "blur(10px)",
                  display: "inline-block",
                  minWidth: "fit-content",
                  border: theme === "dark"
                    ? "1px solid rgba(255,255,255,0.2)"
                    : "1px solid rgba(139,92,246,0.2)",
                }}>{category}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }}
        @keyframes scrollRight {0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }}`}</style>
    </section>
  );
}
export default HeroSection;