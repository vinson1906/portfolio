'use client'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import vinsonImage from '@/../public/assets/vinson.jpg'
import Sanjay from "@/../public/assets/404pagenot found.png"

const Hero = () => {
  const navbarRef = useRef(null);
  const profileImageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    gsap.set(navbarRef.current, { y: -100, opacity: 0 });
    gsap.set(profileImageRef.current, { x: -200, opacity: 0 });
    gsap.set(contentRef.current, { x: 200, opacity: 0 });

    timeline.to(navbarRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    });

    timeline.to(profileImageRef.current, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.5");

    timeline.to(contentRef.current, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.8");

  }, []);
  return (
    <>
      <div className="min-h-screen bg-[#0f0f0f] text-white overflow-hidden">
        <nav
          ref={navbarRef}
          className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold text-white">
                vinson Jose
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About
                </a>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-300">
                  skills
                </a>
                <a href="#project" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Projects
                </a>
                <a href='#contact' className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors duration-300">
                  Contact
                </a>
              </div>

              <button className="md:hidden text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <main className="pt-20 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

              <div ref={profileImageRef} className="relative order-2 lg:order-1">
                <div className="relative w-full max-w-md mx-auto lg:mx-0">
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden relative">
                    <Image
                      src={vinsonImage}
                      alt="Robin Williams - Product Designer"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>


              <div ref={contentRef} className="order-1 lg:order-2 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                  I'm{' '}
                  <span className="text-purple-600">Joseph Vinson Samuel.</span>
                  <br />
                  <span className="text-white">A FullStack Developer</span>
                  <br />
                  <span className="text-gray-500">Ui Designer.</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                  I’m the web developer who turns ideas into sleek,
                  functional experiences. Got a big idea? Let’s build it.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    Get In Touch
                  </button>
                  <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                    View My Work
                  </button>
                </div>

                {/* Stats or Social Links */}
                {/* <div className="flex justify-center lg:justify-start space-x-8 mt-12">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">4+</div>
                    <div className="text-gray-400 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">+</div>
                    <div className="text-gray-400 text-sm">Years Exp.</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">25+</div>
                    <div className="text-gray-400 text-sm">Happy Clients</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-blue-900/5 to-transparent pointer-events-none"></div>
        </main>
      </div>

    </>
  )
}

export default Hero;

