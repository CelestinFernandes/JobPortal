import { CheckCircle } from "lucide-react"

export default function Services({ isDark }) {
  const services = [
    {title: "Job Recommendation",
      description: "Get personalized job recommendations based on your skills and preferences."},
    {title: "Create & Build Profile",
      description: "Build a professional profile that showcases your skills and experience."},
    {title: "Career Consultation",
      description: "Get expert advice on your career path and professional development."}]

  return (
    <section id="services" className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>What We Offer</h2>
        <p className={`text-xl mb-16 max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          We're here to help you find the right job for your career and communicate with your employer.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`text-left rounded-lg transition-all hover:shadow-lg hover:scale-105 hover:bg-purple-50 ${isDark ? "bg-gray-800 hover:bg-purple-900" : "bg-white shadow-sm"}`}>
              <div className={`w-full h-48 rounded-t-lg mb-4 ${isDark ? "bg-gray-700" : "bg-gray-200"}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{service.title}</h3>
                </div>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}