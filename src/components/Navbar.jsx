import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    {path: "/", label: "HOME"},
    {path: "/gallery", label: "GALLERY"},
    {path: "/events", label: "EVENTS"},
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-[#BD9f67]/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-2xl font-bold">
              <span className="text-[#BD9f67]">CODE</span>
              <span className="text-white">SHACK</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-[#BD9f67]"
                    : "text-white hover:text-[#BD9f67]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#BD9f67] text-slate-900 px-6 py-2 rounded-full font-semibold hover:bg-[#A88A5C] transition-colors duration-300"
            >
              JOIN US
            </Link>
          </div>

          <button
            className="md:hidden text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-96 opacity-100 mt-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-300 py-2 ${
                  isActive(link.path)
                    ? "text-[#BD9f67]"
                    : "text-white hover:text-[#BD9f67]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/join"
              className="bg-[#BD9f67] text-slate-900 px-6 py-2 rounded-full font-semibold hover:bg-[#A88A5C] transition-colors duration-300 mt-2 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              JOIN US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
