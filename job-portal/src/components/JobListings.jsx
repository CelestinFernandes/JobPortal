"use client"
import { useState, useEffect } from "react"
import jobsData from "../data/jobs.json"

const JobListings = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")

  useEffect(() => {
    const handleStorageChange = () => setTheme(localStorage.getItem("theme") || "light")
    window.addEventListener("storage", handleStorageChange)
    const interval = setInterval(() => {
      const currentTheme = localStorage.getItem("theme") || "light"
      if (currentTheme !== theme) setTheme(currentTheme)}, 500)
    return () => {
      window.removeEventListener("storage", handleStorageChange)
      clearInterval(interval)}}, [theme])

  return (
    <section className="section" style={{ background: theme === "dark" ? "#374151" : "#f9fafb" }}>
      <div className="container">
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{
              color: theme === "dark" ? "#FFFFFF" : "#222222",
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "16px",
              textAlign: "left",
            }}>
            {jobsData.title.split(" ").map((word, index) =>
              word === "Top" || word === "Job" ? (
                <span key={index} style={{ color: "#6A38C2" }}>{word}{" "}</span>
              ) : (word + " "))}
          </h2>
          <p
            style={{
              color: theme === "dark" ? "#FFFFFF" : "#222222",
              fontSize: "18px",
              textAlign: "left",
              maxWidth: "600px"}}>{jobsData.description}</p>
        </div>

        <div className="grid grid-2">
          {jobsData.jobs.map((job) => (
            <div
              key={job.id}
              className="card"
              style={{
                background: theme === "dark" ? "#222222" : "white",
                transition: "all 0.3s ease",
                cursor: "pointer"}}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#6A38C2"
                e.currentTarget.style.color = "#FFFFFF"}}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = theme === "dark" ? "#222222" : "white"
                e.currentTarget.style.color = theme === "dark" ? "#FFFFFF" : "#222222"}}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "16px" }}>
                <div>
                  <h3 style={{
                    fontSize: "21px",
                    fontWeight: "bold",
                    marginBottom: "4px",
                    color: theme === "dark" ? "#FFFFFF" : "#222222"}}>
                    {job.title}
                  </h3>
                  <p style={{ color: theme === "dark" ? "#FFFFFF" : "#222222", marginBottom: "8px" }}>{job.company} • {job.location}</p>
                </div>
                {job.featured && (
                  <span style={{
                    background: "#6A38C2",
                    color: "white",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "13px"}}>Featured</span>
                )}
              </div>

              <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                {job.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} style={{
                    background: "#e5e7eb",
                    color: "#374151",
                    padding: "4px 12px",
                    borderRadius: "16px",
                    fontSize: "13px",
                  }}>{tag}</span>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ color: theme === "dark" ? "#FFFFFF" : "#222222", fontSize: "14px" }}>{job.type}</span>
                  <span style={{ color: "#6A38C2", fontWeight: "bold", marginLeft: "16px" }}>{job.salary}</span>
                </div>
                <button className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "14px" }}>Apply Now</button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button className="btn btn-outline">View All Jobs</button>
        </div>
      </div>
    </section>
  )
}
export default JobListings