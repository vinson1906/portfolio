'use client'

import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;

    if (section && card) {
      gsap.fromTo(card, 
        { opacity: 0, x: -100 },
        {
          opacity: 1, 
          x: 0, 
          duration: 1, 
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

  const achievements = [
    "Developed and maintained REST APIs for efficient data management",
    "Implemented AWS S3 integration for secure file storage solutions", 
    "Optimized React components resulting in improved application performance",
    "Designed mobile-first responsive interfaces using modern CSS frameworks",
    "Collaborated effectively in agile development environments"
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional <span className="text-purple-600 dark:text-purple-400">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building innovative solutions and gaining valuable industry experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div ref={cardRef} className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            {/* Timeline dot */}
            <div className="absolute -left-4 top-8 w-8 h-8 bg-purple-600 rounded-full border-4 border-white dark:border-gray-800"></div>
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                  Software Developer Intern
                </h3>
                <p className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-2">
                  Tech Innovation Company
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>May 2024 – Aug 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Erode, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Key Achievements & Responsibilities:
              </h4>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {achievement}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'REST APIs', 'Tailwind CSS', 'Git'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;