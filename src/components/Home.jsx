import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hoveredInitiative, setHoveredInitiative] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleLogoClick = () => {
    setIsFlipped(!isFlipped);
  };

  const initiatives = [
    {
      id: 1,
      title: "Tech Vistara",
      icon: "🎯",
      description:
        "An annual technical fest featuring hackathons, workshops, and competitions to showcase innovation and technical prowess.",
      expanded:
        "Tech Vistara is our flagship annual technical festival that brings together students, professionals, and tech enthusiasts. It features multiple tracks including hackathons, coding competitions, tech talks, and hands-on workshops covering emerging technologies.",
    },
    {
      id: 2,
      title: "CSOC",
      icon: "💻",
      description:
        "Codeshack Summer of Code - A mentorship program for students to contribute to open-source projects.",
      expanded:
        "CSOC is an intensive summer program designed to introduce students to open-source development. Participants work on real-world projects under the guidance of experienced mentors, learning industry best practices and contributing to the open-source community.",
    },
    {
      id: 3,
      title: "Eureka!",
      icon: "💡",
      description:
        "An International Business Model competition with prizes and incentives worth more than 1.2 crore INR.",
      expanded:
        "Eureka! is regarded as Asia's largest B-Model Competition by CNN. It provides a platform for aspiring entrepreneurs to showcase their innovative business ideas and compete for substantial prizes while receiving mentorship from industry leaders.",
    },
    {
      id: 4,
      title: "Illuminate",
      icon: "✨",
      description:
        "Workshop series focusing on emerging technologies and skill development for students.",
      expanded:
        "Illuminate is a comprehensive workshop series that covers cutting-edge technologies including AI/ML, Web Development, Cloud Computing, and more. These hands-on sessions are designed to bridge the gap between academic learning and industry requirements.",
    },
    {
      id: 5,
      title: "Campus Ambassador",
      icon: "🎓",
      description:
        "Leadership program to represent Codeshack across different colleges and institutions.",
      expanded:
        "Our Campus Ambassador program creates a network of student leaders who represent Codeshack values and initiatives. Ambassadors gain leadership experience, networking opportunities, and exclusive access to events and resources.",
    },
    {
      id: 6,
      title: "EnB Club",
      icon: "🚀",
      description:
        "Entrepreneurship and Business Club promoting startup culture and business acumen.",
      expanded:
        "EnB Club at IIT Bombay focuses on fostering entrepreneurship and business skills among students. It organizes startup competitions, business plan workshops, and provides mentorship for budding entrepreneurs.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      <section
        id="hero"
        className="relative pt-24 pb-20 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4 sm:px-6">
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

              <button className="group bg-[#BD9f67] text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#A88A5C] transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 mx-auto lg:mx-0 cursor-pointer">
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
                <div className="absolute inset-0 rounded-full border-4 border-[#BD9f67]/30 animate-spin-slow"></div>
                <div className="absolute inset-6 sm:inset-8 rounded-full border-4 border-[#BD9f67]/50 animate-spin-reverse"></div>

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
                      <div className="bg-slate-800 rounded-full p-6 sm:p-8 border-4 border-[#BD9f67] shadow-2xl hover:shadow-[#BD9f67]/50 transition-shadow duration-300">
                        <img
                          src="/Glug-logo.jpg"
                          alt="GLUG Logo"
                          className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-contain"
                        />
                      </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center backface-hidden rotate-y-180">
                      <div className="bg-slate-800 rounded-full p-6 sm:p-8 border-4 border-[#BD9f67] shadow-2xl flex items-center justify-center">
                        <img
                          src="/techhub-logo.jpg"
                          alt="TechHub Logo"
                          className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#BD9f67] text-slate-900 px-4 sm:px-6 py-2 rounded-full font-bold shadow-lg text-sm sm:text-base whitespace-nowrap">
                  GLUG X TechHub
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex fixed right-8 top-1/2 transform -translate-y-1/2 flex-col gap-4 z-40">
            <a
              href="#"
              className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#BD9f67] hover:scale-110 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-white group-hover:text-slate-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#BD9f67] hover:scale-110 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-white group-hover:text-slate-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#BD9f67] hover:scale-110 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-white group-hover:text-slate-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#BD9f67] hover:scale-110 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-white group-hover:text-slate-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#BD9f67] hover:scale-110 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-white group-hover:text-slate-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
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

      <section id="about" className="relative py-12 bg-white text-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#BD9f67] mb-4">
              What is Codeshack?
            </h2>
            <p className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed text-slate-700">
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

      {/* Statistics Section */}
      <section className="relative py-16 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
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
              <div className="text-4xl font-bold text-[#BD9f67] mb-2">100+</div>
              <div className="text-slate-300 text-lg">Active Members</div>
            </div>

            <div className="text-center">
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

            <div className="text-center">
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
      <section className="relative py-20 bg-white text-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#BD9f67] mb-4">
              OUR INITIATIVES
            </h2>
            <p className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed text-slate-700">
              We at Codeshack, SMVIT believe that innovation is the key to
              development. To fulfill this vision, we have conceptualized &
              successfully implemented various initiatives to help students and
              young professionals in their technical journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Tech Vistara */}
            <div className="bg-slate-800 p-6 rounded-lg border-2 border-[#BD9f67]/30 hover:border-[#BD9f67] hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-[#BD9f67]/20 rounded-lg flex items-center justify-center group-hover:bg-[#BD9f67]/30 transition-colors duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#BD9f67] mb-3 text-center">
                Tech Vistara
              </h3>
              <p className="text-slate-300 text-center text-sm">
                Annual technical fest featuring hackathons, workshops, and
                competitions showcasing innovation and creativity.
              </p>
            </div>

            {/* Codeshack Summer of Code */}
            <div className="bg-slate-800 p-6 rounded-lg border-2 border-[#BD9f67]/30 hover:border-[#BD9f67] hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-[#BD9f67]/20 rounded-lg flex items-center justify-center group-hover:bg-[#BD9f67]/30 transition-colors duration-300">
                  <span className="text-3xl">☀️</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#BD9f67] mb-3 text-center">
                CSOC
              </h3>
              <p className="text-slate-300 text-center text-sm">
                Codeshack Summer of Code - A month-long open source contribution
                program for students to learn and contribute.
              </p>
            </div>

            {/* Hacktoberfest */}
            <div className="bg-slate-800 p-6 rounded-lg border-2 border-[#BD9f67]/30 hover:border-[#BD9f67] hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-[#BD9f67]/20 rounded-lg flex items-center justify-center group-hover:bg-[#BD9f67]/30 transition-colors duration-300">
                  <span className="text-3xl">🎃</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#BD9f67] mb-3 text-center">
                Hacktoberfest
              </h3>
              <p className="text-slate-300 text-center text-sm">
                Monthly guidance sessions and workshops helping students
                contribute to open source projects worldwide.
              </p>
            </div>

            {/* Workshop Series */}
            <div className="bg-slate-800 p-6 rounded-lg border-2 border-[#BD9f67]/30 hover:border-[#BD9f67] hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-[#BD9f67]/20 rounded-lg flex items-center justify-center group-hover:bg-[#BD9f67]/30 transition-colors duration-300">
                  <span className="text-3xl">💻</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#BD9f67] mb-3 text-center">
                Workshop Series
              </h3>
              <p className="text-slate-300 text-center text-sm">
                Regular hands-on workshops on latest technologies, tools, and
                frameworks led by industry experts.
              </p>
            </div>

            {/* Code Nights */}
            <div className="bg-slate-800 p-6 rounded-lg border-2 border-[#BD9f67]/30 hover:border-[#BD9f67] hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-[#BD9f67]/20 rounded-lg flex items-center justify-center group-hover:bg-[#BD9f67]/30 transition-colors duration-300">
                  <span className="text-3xl">🌙</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#BD9f67] mb-3 text-center">
                Code Nights
              </h3>
              <p className="text-slate-300 text-center text-sm">
                Overnight coding marathons where students collaborate on
                projects and solve real-world problems.
              </p>
            </div>

            {/* Tech Talks */}
            <div className="bg-slate-800 p-6 rounded-lg border-2 border-[#BD9f67]/30 hover:border-[#BD9f67] hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-[#BD9f67]/20 rounded-lg flex items-center justify-center group-hover:bg-[#BD9f67]/30 transition-colors duration-300">
                  <span className="text-3xl">🎤</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#BD9f67] mb-3 text-center">
                Tech Talks
              </h3>
              <p className="text-slate-300 text-center text-sm">
                Engaging speaker sessions with industry leaders sharing insights
                on cutting-edge technologies and trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="join"
        className="relative py-20 bg-linear-to-br from-slate-800 to-slate-900"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#BD9f67] mb-6">
            Ready to Join Us?
          </h2>
          <Link
            to="/join"
            className="inline-block bg-[#BD9f67] text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-[#A88A5C] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
