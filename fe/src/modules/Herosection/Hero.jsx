'use client'
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import VinsonImage from '../../../public/assets/Screenshot_2024-10-26_235825-removebg-preview.png'
import FrontCard from '../../../public/assets/joker-card-front.png'
import HeroCards from './heroCards';

import Learn from '../../../public/assets/learn.png'
import Build from '../../../public/assets/build.png'
import Repeat from '../../../public/assets/repeat.png'
import { Flip } from 'gsap/all';


import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

const scrollToContact = (e) => {
  e.preventDefault()
  gsap.to(window, { duration: 1.2, scrollTo: { y: '#contact', offsetY: 80 }, ease: 'power3.inOut' })
}



const Hero = () => {
  const heroRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    // Card fly-out animation is desktop-only; cardRef stays in the DOM on
    // mobile (just hidden via CSS) so this still runs safely everywhere,
    // but only matters visually at md+ where the cards are shown.
    const cards = cardRef.current.children;

    const startPosition = [
      { x: "0%", y: "0%" },
      { x: "0%", y: "0%" },
      { x: "0%", y: "0%" },
    ];

    const finalPosition = [
      { x: "380%", y: "380%", rotation: 360 },
      { x: "380%", y: "380%", rotation: 360 },
      { x: "360%", y: "380%", rotation: 360 },
    ];

    gsap.set(cards, { visibility: "visible" });

    Array.from(cards).forEach((card, i) => {
      gsap.set(card, {
        x: startPosition[i].x,
        y: startPosition[i].y,
        rotation: 0,
        scale: 1,
        marker: {
          startPosition: "green",
          endPosition: "red"
        }
      });
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=1000",
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
      }, i * 0.3)
    });


  }, { scope: heroRef })

  const arr = [{
    "front": {
      data: 1,
      image: FrontCard
    },
    "back": {
      title: 'Learn',
      image: Learn
    }
  }, {

    "front": {
      data: 2,
      image: FrontCard
    },
    "back": {
      title: "Build",
      image: Build
    }

  }, {

    "front": {
      data: 3,
      image: FrontCard
    },
    "back": {
      title: "Repeat",
      image: Repeat
    }

  }]



  return (

    <>

      <section
        id="home"
        ref={heroRef}
        className="min-h-screen flex flex-col w-full items-center pt-20 pb-16 md:pb-0 gap-10 bg-gradient-to-br bg-gray-900 relative overflow-hidden"
      >

        <div className="text-center w-full z-10 px-4">
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 min-h-[48px] sm:h-[60px] dark:text-white mb-6"
          >
            <span className="dark:[#c5fb45]">
              <Typewriter
                words={["Heyy!, Hi there ", "I'm Joseph Vinson Samuel", 'I build things for the web', 'design clean UI']}
                loop={false}
                typeSpeed={80}
                deleteSpeed={80}
                delaySpeed={2000}
              />
            </span>
          </h1>


        </div>

        {/* Flying cards: desktop/tablet only. Hidden (not unmounted) on
            mobile so cardRef.current.children stays valid for GSAP. */}
        <div ref={cardRef} className="hidden md:flex gap-4 mt-2">
          {
            arr?.map((ele, i) => (
              <HeroCards key={i} index={i} data={ele} />
            ))
          }
        </div>

        <div className="w-full px-6 md:px-0 flex flex-col md:block md:flex-none">
          <div className="md:absolute md:left-0 md:bottom-8 md:pl-20 xl:w-[1200px] text-center md:text-left">
            <p
              className="text-xl sm:text-2xl md:text-6xl font-medium text-gray-700 dark:text-gray-300 mb-4"
            >
              Crafting modern, high-performance digital experiences
            </p>

            <p
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              Transforming ideas into real-world applications using modern frameworks and best practices.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 md:gap-5 md:absolute md:right-[350px] md:bottom-[90px] md:pl-20">
            <a
              href="/joseph-vinson-samuel_m.pdf"
              download="joseph-vinson-samuel_m.pdf"
              className="px-8 md:px-10 py-3 md:py-4 border-2 border-[#6BF216] text-center"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-8 md:px-10 py-3 md:py-4 border-2 border-[#6BF216] text-center"
            >
              Contact Me
            </a>
          </div>
        </div>



        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-[#6BF216] dark:text-[#6BF216]" />
        </div>
      </section>
    </>

  );
};

export default Hero;