"use client"

import { Sun, Moon } from "lucide-react"
import Logo from "./Logo"

export default function Header({ isDark, toggleTheme }) {
  return (
    <header className={`sticky top-0 z-50 shadow-sm border-b backdrop-blur-sm ${isDark ? "bg-gray-900/95 border-gray-700" : "bg-white/95 border-gray-200"}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo isDark={isDark} />

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className={`transition-colors hover:text-purple-600 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Home</a>
          <a href="#about" className={`transition-colors hover:text-purple-600 ${isDark ? "text-gray-300" : "text-gray-600"}`}>About</a>
          <a href="#jobs" className={`transition-colors hover:text-purple-600 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Jobs</a>
          <a href="#services" className={`transition-colors hover:text-purple-600 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Services</a>
          <a href="#contact" className={`transition-colors hover:text-purple-600 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className={`p-2 rounded-lg transition-colors hover:bg-purple-100 ${isDark ? "text-gray-300 hover:bg-purple-900" : "text-gray-600"}`}>
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className={`px-4 py-2 transition-colors hover:text-purple-600 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Login</button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">Register</button>
        </div>
      </div>
    </header>
  )
}