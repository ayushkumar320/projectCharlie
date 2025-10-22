import React from "react";
import {motion} from "framer-motion";
import {LampContainer} from "./ui/lamp";

export function WhatIsCodeshackLamp() {
  return (
    <LampContainer className="min-h-screen py-20">
      <motion.h2
        initial={{opacity: 0.5, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-16 bg-linear-to-br from-[#BD9f67] to-slate-400 py-6 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-7xl lg:text-8xl"
      >
        What is Codeshack?
      </motion.h2>
      <motion.p
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-12 text-slate-300 text-center text-lg md:text-xl lg:text-2xl max-w-5xl px-6 md:px-8 leading-relaxed"
      >
        Codeshack at SMVIT helps tech enthusiasts and young professionals via
        dynamic workshops, thought-provoking speaker sessions, high-stakes
        coding competitions, and numerous other game-changing initiatives
        throughout the year to create a crucible for innovation. We stand as
        pillars of support for budding developers, providing them with
        personalized guidance from experienced mentors, crucial learning
        opportunities, and a robust network that can change the course of their
        journey forever!
      </motion.p>
    </LampContainer>
  );
}
