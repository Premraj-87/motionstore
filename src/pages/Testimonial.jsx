/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Working with this team transformed our digital presence. Their creativity and attention to detail exceeded all expectations.",
      name: "Sarah Johnson",
      position: "CEO, TechVision Inc.",
    },
    {
      id: 2,
      quote: "The design work was exceptional. They understood our vision perfectly and delivered beyond what we imagined.",
      name: "Michael Chen",
      position: "Founder, StartupHub",
    },
    {
      id: 3,
      quote: "Professional, creative, and incredibly responsive. The best design partner we've ever worked with.",
      name: "Emily Rodriguez",
      position: "Marketing Director, BrandFlow",
    },
    {
      id: 4,
      quote: "Their innovative approach to design helped us stand out in a crowded market. Truly outstanding work.",
      name: "David Thompson",
      position: "Product Manager, InnovateLabs",
    },
    {
      id: 5,
      quote: "From concept to execution, every step was handled with expertise and care. Highly recommended!",
      name: "Lisa Anderson",
      position: "Creative Director, PixelCraft",
    },
    {
      id: 6,
      quote: "The attention to user experience and visual aesthetics made our product shine. Exceptional team!",
      name: "James Wilson",
      position: "CTO, NextGen Solutions",
    },
  ];

  return (
    <motion.div
      className="relative bg-black rounded-2xl text-white p-6 md:p-10 flex flex-col gap-12 overflow-hidden"
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
          Testimonial
        </h2>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-[Orbitron] leading-tight max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        What Our Clients Say About Our Work
      </motion.h1>

      {/* Testimonials Horizontal Scroll */}
      <div className="relative overflow-hidden mt-8">
        <motion.div
          className="flex gap-6"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {/* First set of testimonials */}
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-black border border-white/20 p-6 rounded-2xl flex flex-col gap-4 hover:border-amber-500/50 transition-colors duration-300 min-w-[350px] md:min-w-[400px]"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-amber-500 text-2xl opacity-50" />

              {/* Quote Text */}
              <p className="text-gray-300 leading-relaxed text-sm md:text-base flex-grow">
                {testimonial.quote}
              </p>

              {/* User Info */}
              <div className="border-t border-white/10 pt-4">
                <h3 className="text-white font-semibold text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400 text-sm">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial) => (
            <motion.div
              key={`duplicate-${testimonial.id}`}
              className="bg-black border border-white/20 p-6 rounded-2xl flex flex-col gap-4 hover:border-amber-500/50 transition-colors duration-300 min-w-[350px] md:min-w-[400px]"
              whileHover={{ y: -5, scale: 1 }}
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-amber-500 text-2xl opacity-50" />

              {/* Quote Text */}
              <p className="text-gray-300 leading-relaxed text-sm md:text-base flex-grow">
                {testimonial.quote}
              </p>

              {/* User Info */}
              <div className="border-t border-white/10 pt-4">
                <h3 className="text-white font-semibold text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400 text-sm">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
