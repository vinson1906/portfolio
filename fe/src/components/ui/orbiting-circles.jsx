"use client";

import { motion } from "framer-motion";
import React from "react";

export function OrbitingCircles({
  children,
  radius = 120,
  duration = 20,
  reverse = false,
}) {
  const items = React.Children.toArray(children);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Orbit line */}
      <div
        className="absolute rounded-full border border-neutral-300/50 dark:border-neutral-700/60"
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
      />

      {items.map((child, index) => {
        const angle = (360 / items.length) * index;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              transformOrigin: `${radius}px`,
              rotate: angle,
            }}
            animate={{
              rotate: reverse ? -360 : 360,
            }}
            transition={{
              repeat: Infinity,
              duration,
              ease: "linear",
            }}
          >
            <div className="translate-x-[radius] flex items-center justify-center">
              {child}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
