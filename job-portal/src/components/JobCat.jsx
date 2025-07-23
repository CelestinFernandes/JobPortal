export default function JobCategories({ isDark }) {
  const categories = [
    "Software Developer", "Lead Data Scientist", "System Administrator", "Data Analyst",
    "Frontend Developer", "Backend Developer", "Full Stack Developer", "DevOps Engineer"]

  return (
    <section className={`py-16 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <div key={index} className={`text-center p-4 rounded-lg transition-all hover:shadow-lg hover:bg-purple-50 hover:scale-105 cursor-pointer ${isDark ? "bg-gray-800 hover:bg-purple-900" : "bg-white shadow-sm"}`}>
              <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
              </div>
              <h3 className={`font-medium text-sm ${isDark ? "text-white" : "text-gray-900"}`}>{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}