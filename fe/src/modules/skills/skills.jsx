'use client'

import React from 'react';

const Skills = () => {
  const skillsList = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js",
    "Tailwind CSS", "GSAP", "Node.js", "Express.js", "MongoDB", "Sequelize",
    "Mantine UI", "AWS S3", "Git", "GitHub", "Netlify", "Vercel", "Java", "Python"
  ];

  return (
    <section id="skills" className="relative  sm:py-10 bg-[#0B1120] overflow-hidden">


      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...skillsList, ...skillsList].map((skill, i) => (
            <span
              key={i}
              className="shrink-0 px-4 sm:px-6 md:px-8 text-base sm:text-2xl md:text-4xl font-medium text-gray-500 hover:text-[#6BF216] transition-colors duration-300 whitespace-nowrap cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 16s;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;