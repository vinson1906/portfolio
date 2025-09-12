'use client'
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !taglineRef.current || !buttonsRef.current) return;

    const tl = gsap.timeline({ delay: 0.5 });

    tl.from(titleRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out"
    })
      .from(subtitleRef.current, {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "power3.out"
      }, "-=0.5")
      .from(taglineRef.current, {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power3.out"
      }, "-=0.4")
      .from(Array.from(buttonsRef.current.children), {
        duration: 0.6,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.3");
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      gsap.to(window, { duration: 1, scrollTo: element, ease: "power2.inOut" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      gsap.to(window, { duration: 1, scrollTo: element, ease: "power2.inOut" });
    }
  };

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">

      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          <span className="text-purple-600 dark:text-purple-400">Joseph Vinson</span><br />
          Samuel M
        </h1>

        <p
          ref={subtitleRef}
          className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-4"
        >
          Full-Stack Software Developer
        </p>

        <p
          ref={taglineRef}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building scalable, responsive, and modern web applications with cutting-edge technologies
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
          >
            View Projects
            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            onClick={scrollToContact}
            className="group px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:text-purple-400 dark:hover:text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
          >
            Contact Me
            <Mail size={20} className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-purple-600 dark:text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;