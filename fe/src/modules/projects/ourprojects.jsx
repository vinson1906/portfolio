
'use client'

import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Layers, Database, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './project-card';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);


  useGSAP(() => {
    const cards = cardsRef.current.children;

    const startPosition = [
      { x: "-80vw", y: -50 },
      { x: "-90vw", y: -60 },
      { x: "-90vw", y: -70 }
    ];

    const finalPosition = [
      { x: "0%", y: "0%", rotation: 360 },
      { x: "0%", y: "0%", rotation: 360 },
      { x: "0%", y: "0%", rotation: 360 },
    ];

    gsap.set(cards, { visibility: "visible" });

    Array.from(cards).forEach((card, i) => {
      gsap.set(card, {
        x: startPosition[i].x,
        y: startPosition[i].y,
        rotation: -60,
        scale: 0.5,
        marker: {
          startPosition: "green",
          endPosition: "red"
        }
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        end: "+=100",
        scrub: 2,
        // pin: true,
        // markers: true
      }
    });

    Array.from(cards).forEach((card, i) => {
      tl.to(card, {
        x: finalPosition[i].x,
        y: finalPosition[i].y,
        rotation: finalPosition[i].rotation,
        scale: 1,
        ease: "power4.out.in",
        duration: 0.5
      }, i * 0.3);


    });

  }, { scope: sectionRef });

  const projects = [
    {
      title: "Hipic",
      description: "A TV product showcase application to display featured products, banners, and promotional content in an interactive, visually rich format. Implemented dynamic content management and responsive layouts optimized for large-screen displays",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "AWS"],
      features: ["Image upload", "Dynamic Attribuites", "VPS Hosting"],
      icon: <Layers className="w-6 h-6" />,
      gradient: "from-blue-500 to-[#6BF216]",
      links: {
        github: null,
        host: "https://hipic.in"
      }
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio showcasing projects and skills with smooth animations, contact integration, and optimized performance.",
      technologies: ["Next.js", "Tailwind CSS", "GSAP", "Nodemailer"],
      features: ["Smooth animations", "Contact form", "Responsive design", "Performance optimized"],
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-600",
      links: {
        github: "https://github.com/vinson1906",
        host: "https://vinson-portfolio.netlify.app"
      }
    },
    {
      title: "E-commerce Fashion Website",
      description: "A full-stack fashion e-commerce platform with dynamic product listings, advanced filters, cart, and secure checkout. Implemented responsive UI and scalable backend APIs for product, order, and inventory management with admin controls",
      technologies: ["Next.js","Vite", "Node.js", "MongoDB", "Express.js", "JWT","REST APIs"],
      features: ["User authentication", "CRUD operations", "Search & filter", "Admin dashboard"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600",
      links: {
        github: "https://github.com/vinson1906",
        host: null
      }
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white dark:bg-gray-800 h-[100vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-[#6BF216] dark:text-[#6BF216]">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies and best practices
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;