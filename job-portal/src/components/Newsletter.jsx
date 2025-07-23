export default function Newsletter({ isDark }) {
  return (
    <section className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className={`rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl ${isDark ? "bg-gray-700" : "bg-gray-900"}`}>
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Get Latest Job Updates</h2>
              <p className="text-gray-300 mb-8">Subscribe to our newsletter and get notified about the latest job openings.</p>
              <div className="flex space-x-4">
                <input placeholder="Enter email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-lg outline-none"/>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">Subscribe</button>
              </div>
            </div>
            <div className={`h-full min-h-[300px] ${isDark ? "bg-gray-600" : "bg-gray-200"}`}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
