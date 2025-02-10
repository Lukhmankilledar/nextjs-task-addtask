// components/LoadingScreen.tsx
import { motion } from 'framer-motion';
import React from 'react';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transition: { duration: 1.5 } }}
    >
      <div className="text-2xl font-bold text-primary">Loading...</div>
    </motion.div>
  );
};

export default LoadingScreen;

