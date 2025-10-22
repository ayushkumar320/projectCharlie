import React from "react";
import { Contact2 } from "./ui/contact-2";
import { useShaderBackground } from "./ui/animated-shader-background";

const Contact = () => {
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

      {/* Contact Content */}
      <div className="relative" style={{zIndex: 2}}>
        <Contact2 
          title="Contact CodeShack"
          description="We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!"
          phone="+91 98765 43210"
          email="contact@codeshacksmvit.com"
          web={{ label: "codeshacksmvit.com", url: "https://codeshacksmvit.com" }}
        />
      </div>
    </div>
  );
};

export default Contact;
