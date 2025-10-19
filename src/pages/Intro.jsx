/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Gifanimation from '../assets/gif/intro.mp4';
import Navbar from "../components/Navbar";

const Intro = () => {
  return (
    <motion.div
      className="relative flex items-center justify-center text-white rounded-2xl overflow-hidden min-h-screen py-8"
      animate={{
        background: [
          "linear-gradient(49deg, rgba(13, 10, 10, 1) 22%, rgba(222, 74, 0, 1) 47%, rgba(41, 29, 25, 1) 90%)",
          "linear-gradient(49deg, rgba(20, 15, 15, 1) 22%, rgba(230, 80, 0, 1) 47%, rgba(50, 35, 30, 1) 90%)",
        ],
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }
      }}
    >
      {/* Navbar - Inside Intro */}
      <div className="absolute top-4 left-2 right-2 z-20">
        <Navbar />
      </div>

      {/* Main Content - Centered */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-16 sm:pt-20 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
           

            {/* Main Heading with letter animation */}
            <div className="overflow-hidden">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold leading-tight"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 80 }}
              >
                <motion.span
                  className="inline-block"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  Motion
                </motion.span>
                <br />
                <motion.span 
                  className="text-amber-500 inline-block"
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    delay: 0.5
                  }}
                >
                  Store
                </motion.span>
              </motion.h1>
            </div>

            {/* Description with fade and slide */}
            <motion.p
              className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-xl font-light"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.span 
                className="text-amber-500 font-medium"
                animate={{ 
                  opacity: [1, 0.6, 1],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                Design that moves.
              </motion.span>
              {' '}
              <motion.span 
                className="text-white font-medium"
                animate={{ 
                  scale: [1, 1.03, 1],
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                Experiences that inspire.
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Right: Video Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Card with video */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-48 sm:h-64 md:h-80 lg:h-[380px] object-cover"
              >
                <source src={Gifanimation} type="video/mp4" />
              </video>
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating accent */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.2 },
          y: { duration: 2, repeat: Infinity }
        }}
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[2px] h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
