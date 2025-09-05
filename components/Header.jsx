"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, Download, ExternalLink } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  useEffect(() => {
    const sectionIds = ["about", "skills", "projects", "achievements", "contact"]
    const sections = sectionIds.map(id => document.getElementById(id))
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )
    sections.forEach(section => section && observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const openResume = () => {
  // Open the resume in a new tab
  window.open("/Mehdi_Raza_Resume.pdf", "_blank");
};

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-primary">Mehdi Raza</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`hover:text-accent transition-colors duration-200 ${activeSection === "about" ? "text-blue-500" : "text-foreground"}`}
            >
              About
          </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`${activeSection === "skills" ? "text-blue-500" : "text-foreground"} hover:text-accent transition-colors duration-200 `}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`${activeSection === "projects" ? "text-blue-500" : "text-foreground"} hover:text-accent transition-colors duration-200 `}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className={`${activeSection === "achievements" ? "text-blue-500" : "text-foreground"} hover:text-accent transition-colors duration-200 `}
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`${activeSection === "contact" ? "text-blue-500" : "text-foreground"} hover:text-accent transition-colors duration-200 `}
            >
              Contact
            </button>
            <button
              onClick={openResume}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              <ExternalLink size={16} />
              View Resume
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-accent transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-foreground hover:text-accent transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-foreground hover:text-accent transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="text-left text-foreground hover:text-accent transition-colors duration-200"
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-accent transition-colors duration-200"
              >
                Contact
              </button>
              <button
                onClick={openResume}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 w-fit"
              >
                <ExternalLink size={16} />
                View Resume
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
