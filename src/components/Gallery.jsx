import React from "react";
import { ExpandableGallery } from "./ui/gallery-animation.jsx";
import { useShaderBackground } from "./ui/animated-shader-background.jsx";

const Gallery = () => {
  const canvasRef = useShaderBackground();

  const galleryImages = [
    "https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=3628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1502085671122-2d218cd434e6?q=80&w=3626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Shader Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80" style={{ zIndex: 1 }} />
      
      {/* Content */}
      <div className="relative z-10 pt-24 pb-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#BD9f67] mb-8 text-center">
              Gallery
            </h1>
            <p className="text-slate-300 text-lg text-center mb-12 max-w-3xl mx-auto">
              Explore our collection of memorable moments, events, and achievements from CodeShack's journey.
            </p>
            <ExpandableGallery images={galleryImages} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
