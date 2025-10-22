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
        "relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-slate-900/80 w-full pt-24 md:pt-28 pb-12",
        className
      )}
      style={{zIndex: 0}}
    >
      <div
        className="relative flex w-full flex-1 scale-y-100 sm:scale-y-110 md:scale-y-125 items-center justify-center isolate min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
        style={{zIndex: 0}}
      >
        <motion.div
          initial={{opacity: 0.5, width: "8rem"}}
          whileInView={{opacity: 1, width: "20rem"}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-40 sm:h-48 md:h-56 overflow-visible w-64 sm:w-96 md:w-120 bg-gradient-conic from-[#BD9f67] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        ></motion.div>
        <motion.div
          initial={{opacity: 0.5, width: "8rem"}}
          whileInView={{opacity: 1, width: "20rem"}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-40 sm:h-48 md:h-56 w-64 sm:w-96 md:w-120 bg-gradient-conic from-transparent via-transparent to-[#BD9f67] text-white [--conic-position:from_290deg_at_center_top]"
        ></motion.div>
        <div className="absolute top-1/2 h-32 sm:h-40 md:h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto h-24 sm:h-32 md:h-36 w-80 sm:w-96 md:w-md -translate-y-1/2 rounded-full bg-[#BD9f67] opacity-50 blur-3xl"></div>
        <motion.div
          initial={{width: "6rem"}}
          whileInView={{width: "12rem"}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto h-24 sm:h-32 md:h-36 w-48 sm:w-56 md:w-64 -translate-y-16 sm:-translate-y-20 md:-translate-y-24 rounded-full bg-[#BD9f67]/80 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{width: "12rem"}}
          whileInView={{width: "24rem"}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto h-0.5 w-64 sm:w-96 md:w-120 -translate-y-20 sm:-translate-y-24 md:-translate-y-28 bg-[#BD9f67]"
        ></motion.div>
      </div>

      <div className="relative flex -translate-y-32 sm:-translate-y-48 md:-translate-y-64 flex-col items-center px-5 py-4">
        {children}
      </div>
    </div>
  );
};
