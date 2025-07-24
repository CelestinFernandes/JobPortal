const Logo = ({ className = "" }) => {
  return (
    <div className={`logo ${className}`} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span style={{ fontSize: "24px", fontWeight: "bold" }}>
        <span style={{ color: "#6A38C2" }}>Job</span>
        <span style={{ color: "#FA4E09" }}>hunt</span>
      </span>
    </div>
  )
}
export default Logo