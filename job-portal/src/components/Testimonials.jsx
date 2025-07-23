"use client"
import { useState } from "react"
import { Star, User, ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials({ isDark }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {name: "Sarah Johnson",
      role: "Software Engineer at Google",
      content:"JobHunt made my job search incredibly easy and efficient. Within just two weeks of using their platform, I found my dream job at a top tech company. The personalized job recommendations were spot-on, and the application process was seamless. I highly recommend JobHunt to anyone looking for their next career opportunity!",},
    {name: "Michael Chen",
      role: "Product Manager at Microsoft",
      content: "The platform's user interface is intuitive and the job matching algorithm is impressive. I received relevant job suggestions that aligned perfectly with my skills and career goals. The application tracking feature helped me stay organized throughout my job search process.",},
    {name: "Emily Rodriguez",
      role: "UX Designer at Adobe",
      content: "What sets JobHunt apart is their personalized approach. The career consultation service provided valuable insights that helped me negotiate a better salary package. The platform truly cares about connecting the right talent with the right opportunities.",},
    {name: "David Thompson",
      role: "Data Scientist at Amazon",
      content:"I was impressed by the quality of job listings and the responsiveness of the support team. The profile building tools helped me showcase my skills effectively, and I started receiving interview calls within days of creating my profile."},
    {name: "Lisa Wang",
      role: "Marketing Director at Tesla",
      content:"JobHunt's comprehensive approach to job searching is remarkable. From resume optimization to interview preparation, they provide end-to-end support. I successfully transitioned to my dream role in the automotive industry thanks to their platform."},
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Testimonials</h2>
        <p className={`text-xl mb-12 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          See what our users are saying about us</p>

        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <button onClick={prevTestimonial} className={`p-2 rounded-full transition-colors hover:bg-purple-100 ${isDark ? "text-gray-300 hover:bg-purple-900" : "text-gray-600"}`}>
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                    i === activeTestimonial
                      ? "bg-purple-600 text-white shadow-lg": isDark
                      ? "bg-gray-600 text-gray-300 hover:bg-purple-700": "bg-gray-300 text-gray-600 hover:bg-purple-100"
                  }`}
                >
                  <User className="w-6 h-6" />
                </button>
              ))}
            </div>

            <button onClick={nextTestimonial}
              className={`p-2 rounded-full transition-colors hover:bg-purple-100 ${isDark ? "text-gray-300 hover:bg-purple-900" : "text-gray-600"}`}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-purple-600 text-white rounded-lg p-12 transition-all hover:scale-105 hover:shadow-xl">
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-xl leading-relaxed mb-8">"{testimonials[activeTestimonial].content}"</blockquote>
          <div className="text-center">
            <p className="font-bold text-lg">{testimonials[activeTestimonial].name}</p>
            <p className="text-purple-200">{testimonials[activeTestimonial].role}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
