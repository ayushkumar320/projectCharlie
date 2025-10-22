import React from "react";

const Events = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-400 mb-8 animate-fade-in">
            Events
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-amber-400/20 hover:border-amber-400/50 hover:scale-105 transition-all duration-300">
              <div className="text-amber-400 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Hackathons</h3>
              <p className="text-slate-300">
                Participate in exciting coding challenges and build innovative
                solutions.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-amber-400/20 hover:border-amber-400/50 hover:scale-105 transition-all duration-300">
              <div className="text-amber-400 text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-white mb-2">Workshops</h3>
              <p className="text-slate-300">
                Learn new technologies and tools from industry experts.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-amber-400/20 hover:border-amber-400/50 hover:scale-105 transition-all duration-300">
              <div className="text-amber-400 text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-bold text-white mb-2">Tech Talks</h3>
              <p className="text-slate-300">
                Engage with speakers on cutting-edge technology topics.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-amber-400/20 hover:border-amber-400/50 hover:scale-105 transition-all duration-300">
              <div className="text-amber-400 text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Competitions
              </h3>
              <p className="text-slate-300">
                Test your skills in various technical competitions.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-amber-400/20 hover:border-amber-400/50 hover:scale-105 transition-all duration-300">
              <div className="text-amber-400 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Project Showcases
              </h3>
              <p className="text-slate-300">
                Display your innovative projects to the community.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-amber-400/20 hover:border-amber-400/50 hover:scale-105 transition-all duration-300">
              <div className="text-amber-400 text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-2">Networking</h3>
              <p className="text-slate-300">
                Connect with like-minded tech enthusiasts and professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
