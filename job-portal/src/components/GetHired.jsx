export default function GetHiredSteps({ isDark }) {
  const steps = [
    {
      step: "01",
      title: "Create Account",
      description: "First you have to create an account here and verify your email address to get started.",
    },
    {
      step: "02",
      title: "Search Job",
      description: "Search your desired job and apply for it. You can search by location, salary, and more.",
    },
    {
      step: "03",
      title: "Upload CV/Resume",
      description: "Upload your CV or resume to let employers know about your skills and experience.",
    },
    {
      step: "04",
      title: "Get Job",
      description: "If you are qualified and experienced enough, you will get your desired job.",
    },
  ]

  return (
    <section id="about" className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
          Get Hired in 4 Quick <span className="text-purple-600">Easy Steps</span></h2>
        <p className={`text-xl mb-16 max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          The quickest and most effective way to get hired by the top firm working in your career interest area.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className={`rounded-2xl p-8 transition-all hover:shadow-lg hover:scale-105 hover:bg-purple-50 ${isDark ? "bg-gray-700 hover:bg-purple-900" : "bg-white shadow-sm"}`}>
                <div className="w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                  {item.step}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>{item.title}</h3>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}