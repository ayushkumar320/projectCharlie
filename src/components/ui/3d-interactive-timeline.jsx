import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const defaultColors = {
  background: 'bg-slate-900',
  primary: 'bg-indigo-600',
  secondary: 'bg-violet-500',
  text: 'text-white',
  accent: 'bg-emerald-500',
};

export const Timeline3D = ({
  events,
  backgroundColor = defaultColors.background,
  primaryColor = defaultColors.primary,
  secondaryColor = defaultColors.secondary,
  textColor = defaultColors.text,
  accentColor = defaultColors.accent,
  showImages = true,
  className = '',
}) => {
  const [activeEvent, setActiveEvent] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      setScrollDirection(st > lastScrollTop ? 'down' : 'up');
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      className={`w-full ${backgroundColor} py-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${textColor} ${className}`}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative elements - 3D floating spheres */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full opacity-20 ${i % 2 === 0 ? 'bg-[#BD9f67]' : 'bg-violet-500'}`}
              animate={{
                x: [
                  `${20 + i * 10}%`,
                  `${30 + i * 8}%`,
                  `${15 + i * 12}%`,
                  `${20 + i * 10}%`,
                ],
                y: [
                  `${10 + i * 12}%`,
                  `${20 + i * 10}%`,
                  `${30 + i * 8}%`,
                  `${10 + i * 12}%`,
                ],
                scale: [1, 1.2, 1.1, 1],
              }}
              transition={{
                duration: 20 + i * 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              }}
              style={{
                width: `${50 + i * 20}px`,
                height: `${50 + i * 20}px`,
                filter: 'blur(8px)',
                zIndex: 0,
              }}
            />
          ))}
        </div>

        {/* Main timeline content */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          <div className="relative">
            {/* Central line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#BD9f67] rounded-full"
              style={{
                boxShadow: `0 0 15px rgba(189,159,103,0.5)`,
              }}
            ></div>

            {/* Timeline events */}
            {events.map((event, index) => {
              const [ref, inView] = useInView({
                threshold: 0.3,
                triggerOnce: false,
              });
              const controls = useAnimation();

              useEffect(() => {
                if (inView) {
                  controls.start('visible');
                }
              }, [controls, inView]);

              const isEven = index % 2 === 0;
              const eventColor = event.color ? `bg-${event.color}-500` : primaryColor;

              return (
                <motion.div
                  key={event.id}
                  ref={ref}
                  className={`relative mb-16 md:mb-24 ${isEven ? 'md:ml-auto' : 'md:mr-auto'} md:w-1/2 flex ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: isEven ? 50 : -50,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: 'easeOut',
                      },
                    },
                  }}
                >
                  {/* Timeline node */}
                  <div
                    className={`absolute left-1/2 md:left-auto ${
                      isEven ? 'md:left-0' : 'md:right-0'
                    } top-0 transform -translate-x-1/2 ${
                      isEven ? 'md:translate-x-0' : 'md:translate-x-0'
                    } z-20`}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-[#BD9f67] flex items-center justify-center border-4 border-slate-900 cursor-pointer shadow-lg"
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setActiveEvent(activeEvent === event.id ? null : event.id)}
                      animate={{
                        boxShadow:
                          activeEvent === event.id
                            ? [
                                `0 0 0 rgba(189,159,103,0.5)`,
                                `0 0 20px rgba(189,159,103,0.8)`,
                                `0 0 0 rgba(189,159,103,0.5)`,
                              ]
                            : `0 0 0 rgba(189,159,103,0)`,
                      }}
                      transition={{
                        repeat: activeEvent === event.id ? Infinity : 0,
                        duration: 1.5,
                      }}
                    >
                      {event.icon || (
                        <span className="text-white font-bold">
                          {index + 1}
                        </span>
                      )}
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    className={`relative z-10 bg-slate-800/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl w-full md:w-[calc(100%-2rem)] ${
                      isEven ? 'md:ml-12' : 'md:mr-12'
                    } border border-[#BD9f67]/20 hover:border-[#BD9f67]/40 transition-all duration-300`}
                    whileHover={{
                      y: -5,
                      x: isEven ? 5 : -5,
                      transition: { duration: 0.3 },
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: `perspective(1000px) rotateY(${
                        mousePosition.x * (isEven ? -3 : 3)
                      }deg) rotateX(${mousePosition.y * -3}deg)`,
                    }}
                    onMouseEnter={() => setActiveEvent(event.id)}
                    onMouseLeave={() => setActiveEvent(null)}
                  >
                    {showImages && event.image && (
                      <div className="relative h-48 overflow-hidden">
                        <motion.img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.2 }}
                          animate={{ 
                            scale: activeEvent === event.id ? 1.05 : 1,
                            y: activeEvent === event.id ? -10 : 0 
                          }}
                          transition={{ duration: 0.8 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                        
                        {event.category && (
                          <div className="absolute top-4 right-4">
                            <span className="bg-[#BD9f67]/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg">
                              {event.category}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-mono text-[#BD9f67] tracking-wider">
                          {event.date}
                        </span>
                        
                        <motion.div 
                          className="w-3 h-3 rounded-full bg-[#BD9f67]"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7] 
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 2,
                            repeatType: "reverse"
                          }}
                        />
                      </div>

                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: activeEvent === event.id ? 'auto' : 0,
                          opacity: activeEvent === event.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-300 mt-3 leading-relaxed">
                          {event.description}
                        </p>
                        
                        {event.link && (
                          <a 
                            href={event.link.url}
                            className="inline-block mt-4 px-4 py-2 bg-[#BD9f67] hover:bg-[#BD9f67]/90 text-slate-900 rounded-lg font-medium transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                          >
                            {event.link.text}
                          </a>
                        )}
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="absolute bottom-0 left-0 h-1 bg-[#BD9f67]"
                      initial={{ width: "0%" }}
                      animate={{ width: activeEvent === event.id ? "100%" : "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline3D;
