import React from "react";
import {motion} from "framer-motion";
import {LampContainer} from "./ui/lamp";
import {Link} from "react-router-dom";

export function CodeshackLamp() {
  return (
    <LampContainer>
      <motion.h1
        initial={{opacity: 0.5, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-linear-to-br from-[#BD9f67] to-slate-400 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
      >
        Ready to Join <br /> Codeshack?
      </motion.h1>
      <motion.p
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-6 text-slate-300 text-center text-base md:text-xl max-w-2xl"
      >
        Join the premier technical community at Sir MVIT. Be part of innovation,
        collaborate with passionate developers, and shape the future of
        technology.
      </motion.p>
      <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{
          delay: 0.7,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 flex gap-4 flex-wrap justify-center"
      >
        <Link
          to="/join"
          className="group bg-[#BD9f67]/90 backdrop-blur-md text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-[#BD9f67] transition-all duration-300 flex items-center gap-3 shadow-lg shadow-[#BD9f67]/20 hover:shadow-2xl hover:shadow-[#BD9f67]/40 hover:scale-105 border border-[#BD9f67]/50"
        >
          Join Now
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
        <Link
          to="/events"
          className="group bg-slate-800/50 backdrop-blur-md text-[#BD9f67] px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800/70 transition-all duration-300 flex items-center gap-3 shadow-lg border border-[#BD9f67]/30 hover:border-[#BD9f67]/50 hover:scale-105"
        >
          View Events
        </Link>
      </motion.div>
    </LampContainer>
  );
}
