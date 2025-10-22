import React from "react";
import TimelineDemo from "./ui/timeline-demo.jsx";
import { useShaderBackground } from "./ui/animated-shader-background";

const Events = () => {
  const canvasRef = useShaderBackground();

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      {/* Animated Shader Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full object-cover pointer-events-none"
        style={{background: "black", zIndex: 0}}
      />

      {/* Gradient Overlay for better text readability */}
      <div
        className="fixed inset-0 bg-linear-to-b from-slate-900/40 via-transparent to-slate-900/60 pointer-events-none"
        style={{zIndex: 1}}
      ></div>

      {/* Hero Section */}
      <section
        className="relative pt-24 pb-20 min-h-screen flex items-center"
        style={{zIndex: 2}}
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight animate-fade-in mb-8">
              <span className="text-[#BD9f67]">OUR EVENTS</span>
              <br />
              <span className="text-white">THROUGH TIME</span>
            </h1>
            <div className="flex justify-center">
              <div className="animate-bounce">
                <svg
                  className="w-6 h-6 text-[#BD9f67]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Content */}
      <div className="relative" style={{zIndex: 2}}>
        <TimelineDemo />
      </div>
    </div>
  );
};

export default Events;
