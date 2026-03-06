import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoScritta from '../assets/logo-scritta.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Staff', path: '/staff' },
  { name: 'Store', path: 'https://store.seamc.it' },
];

const Navbar = ({ serverName }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(null);

  const handleNavTopClick = (e, path) => {
    e.preventDefault();

    const scrollUp = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (location.pathname !== path) {
      navigate(path);
      setTimeout(scrollUp, 80);
    } else {
      scrollUp();
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 pt-3">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1200px] mx-auto"
      >
        <div className="glass-card bg-abyss-900/70 backdrop-blur-2xl border-white/10 px-5 md:px-7 py-3.5 md:py-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-500/5 via-transparent to-sea-glow/5 opacity-50" />
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-ocean-500/15 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-sea-glow/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex items-center justify-between gap-4">
            <Link 
              to="/" 
              onClick={(e) => handleNavTopClick(e, '/')} 
              className="flex items-center shrink-0 group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <img 
                  src={logoScritta} 
                  alt={`${serverName} Logo`} 
                  className="h-10 md:h-12 w-auto drop-shadow-[0_0_20px_rgba(20,184,166,0.4)]" 
                />
                <div className="absolute inset-0 bg-ocean-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </Link>

            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="relative"
                  >
                    {link.path.startsWith('http') ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setIsHovered(link.name)}
                        onMouseLeave={() => setIsHovered(null)}
                        className={`relative block px-5 py-2.5 rounded-xl uppercase text-sm lg:text-base tracking-[0.2em] font-display font-black transition-all duration-300 ${
                          'text-sky-100/70 hover:text-white'
                        }`}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {link.name}
                        </span>
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={(e) => handleNavTopClick(e, link.path)}
                        onMouseEnter={() => setIsHovered(link.name)}
                        onMouseLeave={() => setIsHovered(null)}
                        className={`relative block px-5 py-2.5 rounded-xl uppercase text-sm lg:text-base tracking-[0.2em] font-display font-black transition-all duration-300 ${
                          isActive 
                            ? 'text-white' 
                            : 'text-sky-100/70 hover:text-white'
                        }`}
                      >
                      {(isActive || isHovered === link.name) && (
                        <motion.span
                          layoutId="activeNavPill"
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: isActive 
                              ? 'linear-gradient(135deg, rgba(20,184,166,0.25) 0%, rgba(56,189,248,0.15) 100%)'
                              : 'linear-gradient(135deg, rgba(20,184,166,0.12) 0%, rgba(56,189,248,0.06) 100%)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            boxShadow: isActive 
                              ? '0 4px 20px rgba(20,184,166,0.25), inset 0 1px 0 rgba(255,255,255,0.1)'
                              : '0 2px 12px rgba(20,184,166,0.15)'
                          }}
                          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2">
                        {isActive && (
                          <motion.span 
                            layoutId="navDot"
                            className="w-1.5 h-1.5 rounded-full bg-ocean-400"
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        )}
                        {link.name}
                      </span>
                    </Link>
                    )}
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden md:block"
            >
            </motion.div>

            <motion.button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl border border-white/15 bg-white/5-white/80 hover:text text-white hover:border-ocean-400/40 transition-all duration-300"
              aria-label="Apri menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </motion.button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 border-t border-white/10 mt-4">
                  <nav className="flex flex-col gap-2 pb-2">
                    {navLinks.map((link) => {
                      const isActive = location.pathname === link.path;
                      return link.path.startsWith('http') ? (
                        <a
                          key={link.name}
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsMenuOpen(false)}
                          className="rounded-xl px-4 py-3 uppercase tracking-[0.12em] text-sm font-semibold transition-all duration-300 text-sky-100/75 bg-white/5 border border-transparent hover:border-ocean-400/20"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={(e) => handleNavTopClick(e, link.path)}
                          className={`rounded-xl px-4 py-3 uppercase tracking-[0.12em] text-sm font-semibold transition-all duration-300 ${
                            isActive
                              ? 'text-white bg-gradient-to-r from-ocean-500/20 to-sea-glow/10 border border-ocean-400/30'
                              : 'text-sky-100/75 bg-white/5 border border-transparent hover:border-ocean-400/20'
                          }`}
                        >
                          {isActive && (
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-ocean-400 mr-2" />
                          )}
                          {link.name}
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
