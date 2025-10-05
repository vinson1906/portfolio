'use client';
import React, { useEffect, useRef } from 'react';
import './projectCard.css';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

function ProjectCardUI({ project }) {

    console.log(project);
    
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

   
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Hover effect (3D tilt)
    const handleMouseMove = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const rotateY = ((x / width) - 0.5) * 20;
      const rotateX = ((y / height) - 0.5) * -20;

      gsap.to(el, {
        rotateY,
        rotateX,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power3.out' });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative group w-[420px] h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl"
    >
      {/* Image Section */}
      <div className="h-2/3 relative overflow-hidden">
        <a href={project.live_link || '#'} target="_blank" rel="noopener noreferrer">
          <Image
            src={project.image.src}
            alt={project.image.alt || 'project image'}
            height={200}
            width={200}
            className="object-center group-hover:scale-110 transition-transform duration-700 h-full w-full"
          />
        </a>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between h-1/3">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2 z-[10px]">
          {project.description}
        </p>

        <div className="mt-3 flex justify-between items-center">
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-purple-700 hover:underline"
          >
            View Code
          </a>
          <button className="bg-purple-700 p-2 rounded-full text-white shadow-md hover:bg-purple-800 transition">
            <ArrowRight className="w-4 h-4 transform rotate-[-45deg]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardUI;
