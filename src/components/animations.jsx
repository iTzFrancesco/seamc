import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const FadeInView = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.5,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const directions = {
    up: { y: 90, x: 0 },
    down: { y: -90, x: 0 },
    left: { x: 90, y: 0 },
    right: { x: -90, y: 0 }
  };

  const initial = {
    opacity: 0,
    scale: 0.96,
    filter: 'blur(6px)',
    ...directions[direction]
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' } : initial}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleInView = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 70, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, scale: 0.9, y: 70, filter: 'blur(6px)' }}
      transition={{
        duration: duration + 0.1,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ 
  children, 
  className = ''
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 90, scale: 0.94, filter: 'blur(6px)' },
        visible: { 
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          transition: {
            duration: 0.7,
            ease: [0.21, 0.47, 0.32, 0.98]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
