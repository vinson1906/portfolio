
'use client'

import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Layers, Database, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (section && cards) {
      gsap.fromTo(cards.children, 
        { opacity: 0, y: 50, rotationY: 15 },
        {
          opacity: 1, 
          y: 0, 
          rotationY: 0,
          duration: 0.8, 
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const projects = [
    {
      title: "Admin Analytics Screen",
      description: "Interactive sales dashboard with real-time data visualization, advanced filtering, and comprehensive reporting features for business insights.",
      technologies: ["Vite", "React", "Tailwind CSS", "shadcn/ui", "Chart.js"],
      features: ["Real-time analytics", "Interactive charts", "Advanced filtering", "Responsive design"],
      icon: <Layers className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Personal Portfolio Website", 
      description: "Modern, responsive portfolio showcasing projects and skills with smooth animations, contact integration, and optimized performance.",
      technologies: ["React", "Tailwind CSS", "AOS", "Email.js", "GSAP"],
      features: ["Smooth animations", "Contact form", "Responsive design", "Performance optimized"],
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Student Management System",
      description: "Full-stack CRUD application for managing student data with authentication, search functionality, and comprehensive admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
      features: ["User authentication", "CRUD operations", "Search & filter", "Admin dashboard"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-purple-600 dark:text-purple-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies and best practices
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-[1.02] hover:-rotate-1"
              style={{
                transformStyle: 'preserve-3d',
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  duration: 0.3,
                  rotationY: 5,
                  rotationX: 5,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  duration: 0.3,
                  rotationY: 0,
                  rotationX: 0,
                  ease: "power2.out"
                });
              }}
            >
              {/* Project Header */}
              <div className={`h-32 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:text-purple-400 dark:hover:text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;