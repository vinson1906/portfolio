'use client'
import React, { useEffect, useRef } from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About  = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const skillsRef = useRef(null);

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React.js, Next.js, Tailwind CSS"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development", 
      description: "Node.js, Express.js, MongoDB"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full-Stack Solutions",
      description: "End-to-end web applications"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Mobile-first approach"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-[#6BF216] dark:text-[#6BF216]">Me</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm a passionate Full-Stack Software Developer with expertise in modern web technologies. 
              I specialize in creating scalable, responsive applications using React.js, Next.js, and Node.js. 
              With a strong foundation in both frontend and backend development, I build comprehensive solutions 
              that deliver exceptional user experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My experience includes working with REST APIs, AWS S3 integration, optimizing React components, 
              and implementing mobile-first designs. I'm committed to writing clean, maintainable code and 
              collaborating effectively in agile development environments.
            </p>
          </div>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="group p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105">
              <div className="text-[#6BF216] dark:text-[#6BF216] mb-4 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;