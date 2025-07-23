"use client"

import { Play } from "lucide-react"

export default function HeroSection({ isDark }) {
  const jobCategories = [
    "Full Stack Developer","Back-end Developer", "Graphic Designer",
    "Senior Accountant","UI Designer","Employer Branding Associate",
    "Lead DevOps Engineer","Lead DevOps Engineer","Employer Branding Associate",
    "Full Stack Developer","Back-end Developer","Graphic Designer",
    "Senior Accountant","UI Designer"]

  return (
    <section id="home" className={`py-20 relative overflow-hidden ${isDark ? "bg-gradient-to-br from-purple-900 to-blue-900" : "bg-gradient-to-br from-purple-50 to-blue-50"}`}
    >
      {/* Floating Company Logos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
          G
        </div>
        <div className="absolute top-32 right-32 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
          in
        </div>
        <div className="absolute top-40 left-1/4 w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold">
          a
        </div>
        <div className="absolute top-16 right-20 w-10 h-10 bg-red-500 rounded flex items-center justify-center text-white font-bold">
          M
        </div>
        <div className="absolute bottom-32 left-16 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
          ■
        </div>
        <div className="absolute bottom-40 right-24 w-10 h-10 bg-yellow-500 rounded flex items-center justify-center text-white font-bold">
          ⊞
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
            Search, Apply &<br />
            Get Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Dream Job
            </span>
          </h1>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Start your hunt for the best, life-changing career opportunities from here in your selected areas
            conveniently and get hired quickly.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-center space-x-6 mb-16">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-lg transition-colors font-semibold">
              Browse Jobs
            </button>
            <button
              className={`flex items-center space-x-2 px-6 py-4 rounded-lg transition-colors ${isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"}`}
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-white ml-1" />
              </div>
              <span className="text-lg font-semibold">How It Works?</span>
            </button>
          </div>

          {/* Job Categories Scrolling */}
          <div className="relative">
            <div className="flex space-x-4 overflow-hidden">
              <div className="flex space-x-4 animate-scroll">
                {jobCategories.map((category, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors hover:bg-purple-100 hover:text-purple-600 cursor-pointer ${isDark ? "bg-gray-700 text-gray-300" : "bg-white text-gray-700 shadow-sm"}`}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}