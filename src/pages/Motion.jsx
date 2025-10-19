/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Intro = () => {
    const companies = [
  "Acme Corp",
  "Globex",
  "Initech",
  "Umbrella Inc",
  "Wayne Enterprises",
  "Stark Industries",
  "Hooli",
  "Wonka Industries",
];
  return (
    <motion.div
      className="relative border border-amber-700 p-2 sm:p-4 md:p-6 flex flex-col lg:flex-col lg:gap-10 items-center justify-center rounded-2xl overflow-hidden"
      style={{
        height: 'calc(100vh - 1.5rem*2)', // matches App padding
      }}
    >
      {/* Main Heading */}
      <motion.h1
        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-[Exo2] flex flex-col lg:flex-row gap-4 lg:gap-10 text-center lg:text-left mb-6 lg:mb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Powered by{' '}
        <span className="text-amber-700 lg:ml-4">Motion</span>
      </motion.h1>

      {/* Subheading / Description */}
      <motion.p
        className="mt-6 lg:mt-0 text-center lg:text-left lg:translate-x-60 text-lg sm:text-xl md:text-2xl leading-relaxed font-serif max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Every project is done with purpose. If it's worth doing, it's worth doing right.  
        We do it with Motion every time.
      </motion.p>

        {/* Companies Section */}
        <div className=" overflow-hidden mt-10 translate-y-20 shadow-amber-50 bg-gray-50">
 <motion.div
        className="flex whitespace-nowrap gap-20 py-8"
        
        animate={{ x: ["0%", "-100%"] }} // move from 0 to -100%
        transition={{
          repeat: Infinity,
          repeatType: "loop",
            duration: 20,
          ease: "linear",
        }}
      >
        {companies.concat(companies).map((company, index) => (
          <span
            key={index}
            className="text-black text-4xl md:text-2xl font-[Major Mono Display] inline-block"
          >
            {company}
          </span>
        ))}
      </motion.div>
</div>


    </motion.div>
  );
};

export default Intro;
