import React from "react";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#BD9f67] mb-8 animate-fade-in">
            Gallery
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-video bg-slate-800/50 rounded-lg border border-[#BD9f67]/20 hover:border-[#BD9f67]/50 transition-all duration-300 flex items-center justify-center group cursor-pointer overflow-hidden"
              >
                <div className="text-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-6xl text-[#BD9f67]/30 mb-2">📸</div>
                  <p className="text-slate-400">Photo {item}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 mt-12">
            Gallery content coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
