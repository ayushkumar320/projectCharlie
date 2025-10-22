import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="relative bg-transparent backdrop-blur-md border-t border-[#BD9f67]/20"
      style={{zIndex: 2}}
    >
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <img
                  src="/logo.jpg"
                  alt="GLUG"
                  className="w-full h-full rounded-full object-contain border-2 border-[#BD9f67]/50"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#BD9f67]">CODESHACK</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              The premier technical club of Sir MVIT, fostering innovation and
              technical excellence through GLUG and TechHub.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#BD9f67]/80 transition-all duration-300 group border border-[#BD9f67]/20"
              >
                <svg
                  className="w-5 h-5 text-[#BD9f67] group-hover:text-slate-900 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#BD9f67]/80 transition-all duration-300 group border border-[#BD9f67]/20"
              >
                <svg
                  className="w-5 h-5 text-[#BD9f67] group-hover:text-slate-900 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#BD9f67]/80 transition-all duration-300 group border border-[#BD9f67]/20"
              >
                <svg
                  className="w-5 h-5 text-[#BD9f67] group-hover:text-slate-900 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#BD9f67]/80 transition-all duration-300 group border border-[#BD9f67]/20"
              >
                <svg
                  className="w-5 h-5 text-[#BD9f67] group-hover:text-slate-900 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-[#BD9f67] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-[#BD9f67] transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-[#BD9f67] rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-slate-300 hover:text-[#BD9f67] transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-[#BD9f67] rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-slate-300 hover:text-[#BD9f67] transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-[#BD9f67] rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/join"
                  className="text-slate-300 hover:text-[#BD9f67] transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-[#BD9f67] rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Initiatives */}
          <div>
            <h4 className="text-lg font-bold text-[#BD9f67] mb-6">
              Our Initiatives
            </h4>
            <ul className="space-y-3">
              <li className="text-slate-300 text-sm">Tech Vistara</li>
              <li className="text-slate-300 text-sm">CSOC</li>
              <li className="text-slate-300 text-sm">Hacktoberfest</li>
              <li className="text-slate-300 text-sm">Workshop Series</li>
              <li className="text-slate-300 text-sm">Hackathons</li>
              <li className="text-slate-300 text-sm">Tech Talks</li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h4 className="text-lg font-bold text-[#BD9f67] mb-6">
              Get Involved
            </h4>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Join the premier technical community at Sir MVIT and be part of
              innovation.
            </p>
            <Link
              to="/join"
              className="inline-block bg-[#BD9f67]/90 backdrop-blur-md text-slate-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#BD9f67] transition-all duration-300 shadow-lg shadow-[#BD9f67]/20 hover:shadow-xl hover:shadow-[#BD9f67]/30 hover:scale-105 border border-[#BD9f67]/50"
            >
              Join Now
            </Link>
            <div className="mt-6 space-y-2">
              <a
                href="mailto:codeshack@smvit.ac.in"
                className="text-slate-400 hover:text-[#BD9f67] transition-colors text-xs flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                codeshack@smvit.ac.in
              </a>
              <p className="text-slate-400 text-xs flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Sir MVIT, Bangalore
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#BD9f67]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Codeshack SMVIT. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-slate-400 hover:text-[#BD9f67] transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-[#BD9f67] transition-colors text-sm"
              >
                Terms of Service
              </a>
              <p className="text-slate-500 text-xs">
                Made with ❤️ by Codeshack
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
