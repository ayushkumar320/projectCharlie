import React from "react";
import TimelineDemo from "./ui/timeline-demo";
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

      {/* Timeline Content */}
      <div className="relative" style={{zIndex: 2}}>
        <TimelineDemo />
      </div>
    </div>
  );
};

export default Events;
