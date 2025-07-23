export default function CareerOptions({ isDark }) {
  const categories = [
    { name: "Design", color: "bg-orange-100 text-orange-600", icon: "🎨" },
    { name: "Sales", color: "bg-purple-600 text-white", icon: "📊" },
    { name: "Marketing", color: "bg-red-100 text-red-600", icon: "📢" },
    { name: "Finance", color: "bg-yellow-100 text-yellow-600", icon: "💰" },
    { name: "Automobile", color: "bg-blue-100 text-blue-600", icon: "🚗" },
    { name: "Logistics/Delivery", color: "bg-green-100 text-green-600", icon: "🚚" },
    { name: "Admin", color: "bg-indigo-100 text-indigo-600", icon: "📋" },
    { name: "Construction", color: "bg-cyan-100 text-cyan-600", icon: "🏗️" },
  ]

  return (
    <section id="jobs" className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
          Countless Career Options <span className="text-purple-600">Are Waiting</span>
          <br />For You to Explore</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {categories.map((category, index) => (
            <div key={index}
              className={`${category.color} border-0 rounded-lg p-8 text-center transition-all hover:scale-105 hover:shadow-lg cursor-pointer`}>
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold">{category.name}</h3>
              <p className="text-sm opacity-80 mt-2">120 Jobs Available</p>
            </div>
          ))}
        </div>
        <button className="mt-12 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors">Browse All Categories</button>
      </div>
    </section>
  )
}