'use client'

import React, { useEffect, useRef } from 'react';
import { Code2, Server, Wrench, Languages } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { File, Search, Settings } from "lucide-react"
import { OrbitingCircles } from '../../components/ui/orbiting-circles';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const skills = skillsRef.current;

    if (section && skills) {
      gsap.fromTo(skills.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
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

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "Mantine UI", "GSAP"],
      color: "from-blue-500 to-[#6BF216]"
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "Sequelize", "Mongoose"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["GitHub", "AWS S3", "Netlify", "Vercel"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Languages",
      icon: <Languages className="w-6 h-6" />,
      skills: ["Java", "JavaScript", "Python", "TypeScript"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical <span className="text-[#6BF216] dark:text-[#6BF216]">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for building scalable applications
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#6BF216] dark:group-hover:text-[#6BF216] transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

             
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 group-hover:translate-x-2"
                  >
                    <div className="w-2 h-2 bg-[#6BF216] rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className={`mt-6 h-1 bg-gradient-to-r ${category.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "REST APIs", "Database Design", "Responsive Design", "Version Control",
              "Agile Development", "Performance Optimization", "Testing", "Deployment"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-[#6BF216] dark:hover:text-[#6BF216] transition-all duration-300 transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;