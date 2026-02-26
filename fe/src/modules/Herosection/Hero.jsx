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



const Hero = () => {
  const heroRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    const cards = cardRef.current.children;

    const startPosition = [
      { x: "0%", y: "0%" },
      { x: "0%", y: "0%" },
      { x: "0%", y: "0%" },
    ];

    const finalPosition = [
      { x: "380%", y: "380%" ,rotation:360},
      { x: "380%", y: "380%",rotation:360 },
      { x: "360%", y: "380%",rotation:360 },
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

      <section id="home" ref={heroRef} className="min-h-screen flex  flex-col w-full items-center  pt-20 gap-10 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">

        <div className="text-center w-full z-10 px-4  ">
          <h1
            className="text-5xl md:text-7xl font-bold text-gray-900 h-[60px] dark:text-white mb-6"
          >
            <span className=" dark:[#c5fb45]   ">
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


        <div ref={cardRef} className='flex gap-4 mt-2'>
          {
            arr?.map((ele, i) => (
              <HeroCards key={i} index={i} data={ele} />
            ))
          }
        </div>

        <div className='absolute left-0 bottom-8 pl-20 xl:w-[1200px]'>
          <p
            className="text-2xl md:text-6xl font-medium text-gray-700 dark:text-gray-300 mb-4"
          >
            Crafting modern, high-performance digital experiences
          </p>

          <p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl  leading-relaxed"
          >
            Transforming ideas into real-world applications using modern frameworks and best practices.
          </p>
        </div>


        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-[#6BF216] dark:text-[#6BF216]" />
        </div>
      </section>
    </>

  );
};

export default Hero;