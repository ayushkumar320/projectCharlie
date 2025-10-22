import React from "react";
import {motion} from "framer-motion";
import {cn} from "../../lib/utils";

export function LampDemo() {
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
        className="mt-8 bg-linear-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({children, className}) => {
  return (
    <div
      className={cn(
        "relative z-30 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950/80 w-full rounded-md",
        className
      )}
    >
      {/* Soft blur at the top to blend with previous section without blurring entire lamp */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 sm:h-64 md:h-72 bg-linear-to-b from-slate-900/60 via-slate-900/30 to-transparent backdrop-blur-xl z-0" />
      {/* Full-section soft blur to match initiatives section without washing out beams */}
      <div className="pointer-events-none absolute inset-0 bg-slate-900/20 sm:bg-slate-900/25 backdrop-blur-2xl z-0" />
      <div className="relative flex w-full flex-1 scale-y-150 md:scale-y-125 items-center justify-center isolate z-10 translate-y-24 sm:translate-y-28 md:translate-y-36 lg:translate-y-44 xl:translate-y-48">
        <motion.div
          initial={{opacity: 0.5, width: "12rem"}}
          whileInView={{opacity: 1, width: "25rem"}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-120 bg-gradient-conic from-[#BD9f67] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-slate-950 h-40 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-slate-950 bottom-0 z-20 mask-[linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{opacity: 0.5, width: "12rem"}}
          whileInView={{opacity: 1, width: "25rem"}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-120 bg-gradient-conic from-transparent via-transparent to-[#BD9f67] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 bg-slate-950 bottom-0 z-20 mask-[linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-slate-950 h-40 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-md -translate-y-1/2 rounded-full bg-[#BD9f67] opacity-50 blur-3xl"></div>
        <motion.div
          initial={{width: "8rem"}}
          whileInView={{width: "16rem"}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-24 rounded-full bg-[#BD9f67]/80 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{width: "12rem"}}
          whileInView={{width: "25rem"}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-120 -translate-y-28 bg-[#BD9f67]"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-50 bg-slate-950"></div>
      </div>

      <div className="relative z-50 flex translate-y-0 flex-col items-center px-5 py-12">
        {children}
      </div>
    </div>
  );
};
