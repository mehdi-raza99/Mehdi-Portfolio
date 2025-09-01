"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "./ui/card"
import { Trophy, Users, Brain, Laptop, Star, Award, Target, Lightbulb } from "lucide-react"

export default function Achievements() {
  const achievementsRef = useRef(null)

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

    const elements = achievementsRef.current?.querySelectorAll(".scroll-animate")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="achievements"
      ref={achievementsRef}
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/50"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 md:mb-6">
              Achievements & Recognition
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Milestones that shaped my journey as a software engineer and professional
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Amal Fellowship Achievement */}
          <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-1000 ease-out delay-200">
            <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-accent/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                  <div className="p-3 md:p-4 bg-gradient-to-r from-accent to-primary rounded-2xl flex-shrink-0">
                    <Trophy className="text-white" size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Amal Career-Prep Fellowship</h3>
                    <p className="text-accent font-semibold text-sm md:text-base">Stanford University-funded Program</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-muted/50 p-3 md:p-4 rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground mb-2">SELECTION ACHIEVEMENT</p>
                    <p className="font-semibold text-base md:text-lg">Selected from 4,000+ competitive applicants</p>
                    <p className="text-xs md:text-sm text-foreground mt-2">
                      Rigorous selection process evaluating academic excellence, leadership potential, and commitment to
                      professional development
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary flex items-center gap-2">
                      <Brain size={18} />
                      Program Highlights & Skills Developed
                    </h4>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Users size={16} className="text-accent" />
                        <span>Leadership & Teamwork</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Target size={16} className="text-accent" />
                        <span>Goal Setting & Planning</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Lightbulb size={16} className="text-accent" />
                        <span>Critical Thinking</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star size={16} className="text-accent" />
                        <span>Personal Branding</span>
                      </div>
                    </div>

                    <div className="bg-accent/10 p-4 rounded-lg mt-4">
                      <p className="text-sm font-medium text-accent mb-2">INTENSIVE TRAINING COMPLETED</p>
                      <p className="text-2xl font-bold text-primary">150+ Hours</p>
                      <p className="text-sm text-foreground mt-2">
                        Comprehensive training led by industry experts focusing on 21st-century professional skills,
                        emotional intelligence, communication excellence, and career advancement strategies
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-medium text-primary">Key Learning Outcomes:</h5>
                      <ul className="text-sm text-foreground space-y-1 ml-4">
                        <li>• Enhanced communication and presentation skills</li>
                        <li>• Advanced leadership and team management capabilities</li>
                        <li>• Professional networking and relationship building</li>
                        <li>• Strategic thinking and problem-solving methodologies</li>
                        <li>• Personal brand development and career planning</li>
                        <li>• Emotional intelligence and workplace dynamics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* PMYP Laptop Achievement */}
          <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-1000 ease-out delay-400">
            <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-primary/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                  <div className="p-3 md:p-4 bg-gradient-to-r from-primary to-accent rounded-2xl flex-shrink-0">
                    <Laptop className="text-white" size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">PMYP Laptop Scheme Award</h3>
                    <p className="text-primary font-semibold text-sm md:text-base">Prime Minister's Youth Program</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-muted/50 p-3 md:p-4 rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground mb-2">ACADEMIC EXCELLENCE RECOGNITION</p>
                    <p className="font-semibold text-lg md:text-xl">Outstanding Academic Performance Award</p>
                    <p className="text-xs md:text-sm text-foreground mt-2">
                      Recognized by the Government of Pakistan for exceptional academic achievements and potential in
                      technology education
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary flex items-center gap-2">
                      <Award size={18} />
                      Achievement Details
                    </h4>

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm font-medium text-primary mb-2">ACADEMIC PERFORMANCE</p>
                      <div className="grid grid-cols-2 gap-4">
                        
                        <div>
                          <p className="text-2xl font-bold text-primary">3.5</p>
                          <p className="text-sm text-muted-foreground">CGPA</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-medium text-primary">Program Significance:</h5>
                      <ul className="text-sm text-foreground space-y-1 ml-4">
                        <li>• National-level recognition for academic excellence</li>
                        <li>• Government investment in promising technology students</li>
                        <li>• Enablement of advanced learning and project development</li>
                        <li>• Access to modern computing resources for skill enhancement</li>
                        <li>• Motivation to maintain high academic standards</li>
                      </ul>
                    </div>

                    <div className="bg-accent/10 p-4 rounded-lg">
                      <p className="text-sm font-medium text-accent mb-2">IMPACT ON DEVELOPMENT</p>
                      <p className="text-sm text-foreground">
                        This recognition provided essential computing resources that accelerated my learning in software
                        development, enabled me to work on complex projects, and contributed significantly to my
                        technical skill development and academic success.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        
      </div>
    </section>
  )
}
