"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "./ui/card"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projectsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = projectsRef.current?.querySelectorAll(".scroll-animate")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Built a comprehensive e-commerce solution with reusable, responsive UI components using React and Tailwind CSS. Implemented Redux for global state management with complete cart operations including add, remove, increment, and decrement functionality. Features include product catalog, shopping cart, and responsive design across all devices.",
      technologies: ["React", "Redux", "Tailwind CSS", "API Integration", "JavaScript", "Responsive Design"],
      type: "Personal Project",
      links: {
        github: "https://github.com/mehdi-raza99/E-commerce-Platform",
        live: "https://e-commerce-platform-by-mehdi.netlify.app/",
      },
    },
    {
      title: "Weather App",
      description:
        "Developed a fully responsive weather application using React with real-time data fetching from the OpenWeatherMap API. Features include display of real-time weather, location-based weather, search functionality, humidity level and wind speed. Implemented error handling and loading states for optimal user experience.",
      technologies: ["React", "OpenWeatherMap API", "CSS3", "JavaScript", "API Integration"],
      type: "Personal Project",
      links: {
        github: "https://github.com/mehdi-raza99/Weather-App",
        live: "https://weatherforecasts-app.netlify.app/",
      },
    },
    {
      title: "MovieMate",
      description:
        "Developed a movie search and discovery application using React and the Advanced Movie Search API. Features include movie search, detailed movie information, rating, release year, and responsive design. Implemented error handling and loading states for enhanced user experience.",
      technologies: ["React", "Movie API", "JavaScript", "CSS3", "API Integration"],
      type: "Personal Project",
      links: {
        github: "https://github.com/mehdi-raza99/Movie-Mate",
        live: "https://moviemateapp.netlify.app/",
      },
    },
    {
      title: "Keeper App",
      description:
        "Developed a feature-rich note-taking application inspired by Google Keep using React. Allows users to create, view and delete notes. Implemented local storage for data persistence.",
      technologies: ["React", "Local Storage", "CSS3", "JavaScript", "Responsive Design"],
      type: "Personal Project",
      links: {
        github: "https://github.com/mehdi-raza99/Kepper-App",
        live: "https://keeperzone.netlify.app/",
      },
    },
    {
      title: "Prison Management System",
      description:
        "Developed an Entity-Relationship Diagram (ERD) to model the database structure, capturing the relationships between entities such as prisoners, guards, and cells",
      technologies: ["Database Design", "ERD", "Normalization"],
      type: "University Project",
      links: {
        github: "https://github.com/mehdi-raza99/Prison-Management-System",
      },
    },
  ]

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-primary mb-16">Projects & Work</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="scroll-animate opacity-0 transition-all duration-1000 ease-out"
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col group">
                <CardContent className="p-6 lg:p-8 flex flex-col h-full gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                      <h3 className="font-semibold text-primary text-xl lg:text-2xl leading-tight">{project.title}</h3>
                      <span className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full font-medium whitespace-nowrap self-start">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-6">
                    <p className="text-foreground/80 leading-relaxed text-sm lg:text-base line-clamp-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-xs lg:text-sm font-medium hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 text-sm font-medium hover:scale-105 group-hover:shadow-md"
                      >
                        <Github size={16} />
                        Github
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-200 text-sm font-medium hover:scale-105 group-hover:shadow-md"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
