import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#BD9f67] mb-8 animate-fade-in">
            About Us
          </h1>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              Welcome to{" "}
              <span className="text-[#BD9f67] font-semibold">Codeshack</span>,
              the premier technical club of SMVIT that brings together
              passionate students interested in technology, innovation, and
              collaboration.
            </p>
            <p>We are the umbrella organization for two dynamic groups:</p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-[#BD9f67]/20 hover:border-[#BD9f67]/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#BD9f67] mb-3">GLUG</h3>
                <p className="text-slate-300">
                  GNU/Linux Users Group - Promoting open-source software, Linux
                  systems, and free software philosophy.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-[#BD9f67]/20 hover:border-[#BD9f67]/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#BD9f67] mb-3">
                  TechHub
                </h3>
                <p className="text-slate-300">
                  A community focused on emerging technologies, workshops, and
                  hands-on technical projects.
                </p>
              </div>
            </div>
            <p>
              Together, we create an environment where students can learn,
              experiment, and grow their technical skills while working on
              real-world projects and participating in various tech events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
