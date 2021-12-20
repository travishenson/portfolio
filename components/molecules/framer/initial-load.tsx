import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const InitialLoad: React.FC = () => {
  const blackBox = {
    initial: {
      height: '100vh',
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  
  return (
    <AnimatePresence>
      <motion.div className="initial-load" animate="animate" variants={blackBox} exit={{opacity: 0}}>

      </motion.div>
    </AnimatePresence>
  )
}

export default InitialLoad;