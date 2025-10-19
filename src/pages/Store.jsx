/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Store = () => {
  return (
    <motion.div
      className="relative bg-black rounded-2xl text-white p-6 md:p-10 flex flex-col gap-12"
      style={{
        minHeight: "calc(100vh - 1.5rem*2)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Small Heading */}
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-12 h-[2px] bg-amber-500"></div>
        <h2 className="text-sm md:text-base font-orbitron font-semibold tracking-widest uppercase text-amber-500">
          Store
        </h2>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold leading-tight max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Coming Soon
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-gray-300 text-lg md:text-xl max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Our store is currently under construction. Check back soon for amazing products and services!
      </motion.p>
    </motion.div>
  );
};

export default Store;