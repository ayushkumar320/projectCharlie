import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useShaderBackground} from "./ui/animated-shader-background";
import Footer from "./Footer";

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});
  const canvasRef = useShaderBackground();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleLogoClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCardClick = (cardId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

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
        className="fixed inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60 pointer-events-none"
        style={{zIndex: 1}}
      ></div>

      <section
        id="hero"
        className="relative pt-24 pb-20 min-h-screen flex items-center"
        style={{zIndex: 2}}
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 min-h-[80vh]">
            <div className="flex-1 space-y-4 sm:space-y-6 max-w-2xl text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight animate-fade-in">
                <span className="text-[#BD9f67]">CODESHACK</span>
                <br />
                <span className="text-white">SMVIT</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
                The Technical Club of Sir MVIT has been inspiring students since
                its inception. Codeshack is the parent organization for{" "}
                <span className="text-[#BD9f67] font-semibold">GLUG</span>{" "}
                (GNU/Linux Users Group) and{" "}
                <span className="text-[#BD9f67] font-semibold">TechHub</span>,
                promoting innovation, collaboration, and technical excellence as
                the premier student-run tech community.
              </p>

              <button className="group bg-[#BD9f67]/90 backdrop-blur-md text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#BD9f67] transition-all duration-300 flex items-center gap-3 shadow-lg shadow-[#BD9f67]/20 hover:shadow-2xl hover:shadow-[#BD9f67]/40 hover:scale-105 mx-auto lg:mx-0 cursor-pointer border border-[#BD9f67]/50">
                Know More
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full border-2 border-[#BD9f67]/20 backdrop-blur-sm animate-spin-slow bg-gradient-to-r from-[#BD9f67]/10 to-transparent"></div>
                <div className="absolute inset-6 sm:inset-8 rounded-full border-2 border-[#BD9f67]/30 backdrop-blur-sm animate-spin-reverse bg-gradient-to-l from-[#BD9f67]/10 to-transparent"></div>

                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer perspective-1000"
                  onClick={handleLogoClick}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-1000 transform-style-3d ${
                      isFlipped ? "rotate-y-180" : ""
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center backface-hidden">
                      <div className="bg-slate-800/40 backdrop-blur-xl rounded-full p-6 sm:p-8 border-2 border-[#BD9f67]/50 shadow-2xl shadow-[#BD9f67]/20 hover:shadow-[#BD9f67]/40 hover:border-[#BD9f67]/70 transition-all duration-300">
                        <img
                          src="/Glug-logo.jpg"
                          alt="GLUG Logo"
                          className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-contain"
                        />
                      </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center backface-hidden rotate-y-180">
                      <div className="bg-slate-800/40 backdrop-blur-xl rounded-full p-6 sm:p-8 border-2 border-[#BD9f67]/50 shadow-2xl shadow-[#BD9f67]/20 flex items-center justify-center">
                        <img
                          src="/techhub-logo.jpg"
                          alt="TechHub Logo"
                          className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#BD9f67]/90 backdrop-blur-md text-slate-900 px-4 sm:px-6 py-2 rounded-full font-bold shadow-lg shadow-[#BD9f67]/30 text-sm sm:text-base whitespace-nowrap border border-[#BD9f67]/50">
                  GLUG X TechHub
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex fixed right-0 top-1/2 transform -translate-y-1/2 flex-col z-40 bg-slate-800/30 backdrop-blur-xl rounded-l-2xl border-l-2 border-y-2 border-[#BD9f67]/30 shadow-2xl">
            <a
              href="#"
              className="w-14 h-14 flex items-center justify-center hover:bg-[#BD9f67]/80 backdrop-blur-md transition-all duration-300 group border-b border-slate-700/50"
            >
              <svg
                className="w-5 h-5 text-[#BD9f67] group-hover:text-slate-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-14 h-14 flex items-center justify-center hover:bg-[#BD9f67]/80 backdrop-blur-md transition-all duration-300 group border-b border-slate-700/50"
            >
              <svg
                className="w-5 h-5 text-[#BD9f67] group-hover:text-slate-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-14 h-14 flex items-center justify-center hover:bg-[#BD9f67]/80 backdrop-blur-md transition-all duration-300 group border-b border-slate-700/50"
            >
              <svg
                className="w-5 h-5 text-[#BD9f67] group-hover:text-slate-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-14 h-14 flex items-center justify-center hover:bg-[#BD9f67]/80 backdrop-blur-md transition-all duration-300 group border-b border-slate-700/50"
            >
              <svg
                className="w-5 h-5 text-[#BD9f67] group-hover:text-slate-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-14 h-14 flex items-center justify-center hover:bg-[#BD9f67]/80 backdrop-blur-md transition-all duration-300 group rounded-bl-2xl"
            >
              <svg
                className="w-6 h-6 text-[#BD9f67] group-hover:text-slate-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
              </svg>
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
      </section>

      <section
        id="about"
        className="relative py-12 bg-white/5 backdrop-blur-2xl text-white border-y border-white/10"
        style={{zIndex: 2}}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-[#BD9f67]/20 shadow-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#BD9f67] mb-4">
              What is Codeshack?
            </h2>
            <p className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed text-slate-300">
              Codeshack at SMVIT helps tech enthusiasts and young professionals
              via dynamic workshops, thought-provoking speaker sessions,
              high-stakes coding competitions, and numerous other game-changing
              initiatives throughout the year to create a crucible for
              innovation. We stand as pillars of support for budding developers,
              providing them with personalized guidance from experienced
              mentors, crucial learning opportunities, and a robust network that
              can change the course of their journey forever!
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative py-16 bg-linear-to-r from-slate-900/50 via-slate-800/50 to-slate-900/50 backdrop-blur-xl"
        style={{zIndex: 2}}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-[#BD9f67]/20 hover:border-[#BD9f67]/40 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[#BD9f67]/20">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-16 h-16 text-[#BD9f67]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#BD9f67] mb-2">50+</div>
              <div className="text-slate-300 text-lg">Active Members</div>
            </div>

            <div className="text-center bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-[#BD9f67]/20 hover:border-[#BD9f67]/40 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[#BD9f67]/20">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-16 h-16 text-[#BD9f67]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#BD9f67] mb-2">50+</div>
              <div className="text-slate-300 text-lg">Events Conducted</div>
            </div>

            <div className="text-center bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-[#BD9f67]/20 hover:border-[#BD9f67]/40 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[#BD9f67]/20">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-16 h-16 text-[#BD9f67]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#BD9f67] mb-2">5+</div>
              <div className="text-slate-300 text-lg">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Initiatives Section */}
      <section
        className="relative py-20 bg-white/5 backdrop-blur-2xl text-white border-y border-white/10"
        style={{zIndex: 2}}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#BD9f67] mb-4">
              OUR INITIATIVES
            </h2>
            <p className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed text-slate-300">
              We at Codeshack, SMVIT believe that innovation is the key to
              development. To fulfill this vision, we have conceptualized &
              successfully implemented various initiatives to help students and
              young professionals in their technical journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tech Vistara */}
            <div
              className="group relative h-[280px] perspective-1000 cursor-pointer"
              onClick={() => handleCardClick("techVistara")}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d md:group-hover:rotate-y-180 ${
                  flippedCards.techVistara ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-xl rounded-2xl border-2 border-[#BD9f67]/30 p-8 backface-hidden flex flex-col items-center justify-center text-center shadow-xl hover:border-[#BD9f67]/50 transition-all duration-300">
                  <div className="mb-6">
                    <svg
                      className="w-20 h-20 text-[#BD9f67] drop-shadow-[0_0_8px_rgba(189,159,103,0.3)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#BD9f67]">
                    Tech Vistara
                  </h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#BD9f67]/90 backdrop-blur-xl rounded-2xl border-2 border-[#BD9f67] p-8 backface-hidden rotate-y-180 flex items-center justify-center shadow-2xl shadow-[#BD9f67]/30">
                  <p className="text-slate-900 text-center text-base font-medium">
                    Annual orientation programme welcoming freshers to the
                    technical community and club culture.
                  </p>
                </div>
              </div>
            </div>

            {/* Codeshack Summer of Code */}
            <div
              className="group relative h-[280px] perspective-1000 cursor-pointer"
              onClick={() => handleCardClick("csoc")}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d md:group-hover:rotate-y-180 ${
                  flippedCards.csoc ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-xl rounded-2xl border-2 border-[#BD9f67]/30 p-8 backface-hidden flex flex-col items-center justify-center text-center shadow-xl hover:border-[#BD9f67]/50 transition-all duration-300">
                  <div className="mb-6">
                    <svg
                      className="w-20 h-20 text-[#BD9f67] drop-shadow-[0_0_8px_rgba(189,159,103,0.3)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#BD9f67]">CSOC</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#BD9f67]/90 backdrop-blur-xl rounded-2xl border-2 border-[#BD9f67] p-8 backface-hidden rotate-y-180 flex items-center justify-center shadow-2xl shadow-[#BD9f67]/30">
                  <p className="text-slate-900 text-center text-base font-medium">
                    Codeshack Summer of Code - A month-long open source
                    contribution program for students to learn and contribute.
                  </p>
                </div>
              </div>
            </div>

            {/* Hacktoberfest */}
            <div
              className="group relative h-[280px] perspective-1000 cursor-pointer"
              onClick={() => handleCardClick("hacktoberfest")}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d md:group-hover:rotate-y-180 ${
                  flippedCards.hacktoberfest ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-xl rounded-2xl border-2 border-[#BD9f67]/30 p-8 backface-hidden flex flex-col items-center justify-center text-center shadow-xl hover:border-[#BD9f67]/50 transition-all duration-300">
                  <div className="mb-6">
                    <svg
                      className="w-20 h-20 text-[#BD9f67] drop-shadow-[0_0_8px_rgba(189,159,103,0.3)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#BD9f67]">
                    Hacktoberfest
                  </h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#BD9f67]/90 backdrop-blur-xl rounded-2xl border-2 border-[#BD9f67] p-8 backface-hidden rotate-y-180 flex items-center justify-center shadow-2xl shadow-[#BD9f67]/30">
                  <p className="text-slate-900 text-center text-base font-medium">
                    Monthly guidance sessions and workshops helping students
                    contribute to open source projects worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Workshop Series */}
            <div
              className="group relative h-[280px] perspective-1000 cursor-pointer"
              onClick={() => handleCardClick("workshop")}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d md:group-hover:rotate-y-180 ${
                  flippedCards.workshop ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-xl rounded-2xl border-2 border-[#BD9f67]/30 p-8 backface-hidden flex flex-col items-center justify-center text-center shadow-xl hover:border-[#BD9f67]/50 transition-all duration-300">
                  <div className="mb-6">
                    <svg
                      className="w-20 h-20 text-[#BD9f67] drop-shadow-[0_0_8px_rgba(189,159,103,0.3)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#BD9f67]">
                    Workshop Series
                  </h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#BD9f67]/90 backdrop-blur-xl rounded-2xl border-2 border-[#BD9f67] p-8 backface-hidden rotate-y-180 flex items-center justify-center shadow-2xl shadow-[#BD9f67]/30">
                  <p className="text-slate-900 text-center text-base font-medium">
                    Regular hands-on workshops on latest technologies, tools,
                    and frameworks led by industry experts.
                  </p>
                </div>
              </div>
            </div>

            {/* Hackathons */}
            <div
              className="group relative h-[280px] perspective-1000 cursor-pointer"
              onClick={() => handleCardClick("hackathons")}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d md:group-hover:rotate-y-180 ${
                  flippedCards.hackathons ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-xl rounded-2xl border-2 border-[#BD9f67]/30 p-8 backface-hidden flex flex-col items-center justify-center text-center shadow-xl hover:border-[#BD9f67]/50 transition-all duration-300">
                  <div className="mb-6">
                    <svg
                      className="w-20 h-20 text-[#BD9f67] drop-shadow-[0_0_8px_rgba(189,159,103,0.3)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#BD9f67]">
                    Hackathons
                  </h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#BD9f67]/90 backdrop-blur-xl rounded-2xl border-2 border-[#BD9f67] p-8 backface-hidden rotate-y-180 flex items-center justify-center shadow-2xl shadow-[#BD9f67]/30">
                  <p className="text-slate-900 text-center text-base font-medium">
                    Active Hackathons throughout the year encouraging innovation
                    and problem-solving among participants.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Talks */}
            <div
              className="group relative h-[280px] perspective-1000 cursor-pointer"
              onClick={() => handleCardClick("techTalks")}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d md:group-hover:rotate-y-180 ${
                  flippedCards.techTalks ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-xl rounded-2xl border-2 border-[#BD9f67]/30 p-8 backface-hidden flex flex-col items-center justify-center text-center shadow-xl hover:border-[#BD9f67]/50 transition-all duration-300">
                  <div className="mb-6">
                    <svg
                      className="w-20 h-20 text-[#BD9f67] drop-shadow-[0_0_8px_rgba(189,159,103,0.3)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#BD9f67]">
                    Tech Talks
                  </h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#BD9f67]/90 backdrop-blur-xl rounded-2xl border-2 border-[#BD9f67] p-8 backface-hidden rotate-y-180 flex items-center justify-center shadow-2xl shadow-[#BD9f67]/30">
                  <p className="text-slate-900 text-center text-base font-medium">
                    Engaging speaker sessions with industry leaders sharing
                    insights on cutting-edge technologies and trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
