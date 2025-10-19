/* eslint-disable no-unused-vars */
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";
import bigVideo1 from "../assets/gif/about.mp4";
import bigVideo2 from "../assets/gif/globe.mp4";
import { FaGlobe } from "react-icons/fa";
import { 
  SiFigma, 
  SiAdobephotoshop, 
  SiReact, 
  SiTailwindcss, 
  SiFramer,
  SiAdobeillustrator,
  SiBlender,
  SiAdobeaftereffects,
  SiSketch,
  SiWebflow,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiMongodb
} from "react-icons/si";

const About = () => {
  const stats = useMemo(() => [
    { id: 1, label: "Years of Experience", value: 10 },
    { id: 2, label: "Awards & Recognition", value: 15 },
    { id: 3, label: "Clients Served", value: 250 },
  ], []);

  const counter1 = useMotionValue(0);
  const counter2 = useMotionValue(0);
  const counter3 = useMotionValue(0);
  const counters = useMemo(() => [counter1, counter2, counter3], [counter1, counter2, counter3]);

  const span1 = useRef(null);
  const span2 = useRef(null);
  const span3 = useRef(null);
  const spans = useMemo(() => [span1, span2, span3], [span1, span2, span3]);

  useEffect(() => {
    const controls = counters.map((counter, i) =>
      animate(counter, stats[i].value, {
        duration: 2,
        onUpdate: (latest) => {
          if (spans[i].current) spans[i].current.textContent = Math.floor(latest);
        },
      })
    );

    return () => controls.forEach((c) => c.stop());
  }, [counters, spans, stats]);

  return (
    <motion.div className="relative rounded-xl bg-black text-white p-6 md:p-10 flex flex-col gap-16">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center">About Us</h1>

      {/* First section: Video + Stats */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Video + Text */}
        <motion.div
          className="flex-1 rounded-2xl overflow-hidden border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <video
            src={bigVideo1}
            autoPlay
            loop
            muted
            className="w-full h-96 object-cover rounded-2xl"
          />
          <div className="p-4">
            <p className="text-gray-200 leading-relaxed">
              We have been shaping digital experiences for years, focusing on innovation, creativity,
              and client satisfaction. Every project ensures top-notch quality.
            </p>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="flex-1 flex flex-col justify-between gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              className="bg-black border border-white/20 p-6 rounded-2xl flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: i * 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                ref={spans[i]}
                className="text-4xl font-bold text-amber-500"
              >
                0
              </motion.span>
              <p className="mt-2 text-white text-center">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global Reach */}
      <motion.div
        className="flex items-center gap-4 p-6 bg-black border border-white/20 rounded-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FaGlobe className="text-4xl" />
        <div>
          <h3 className="font-bold text-lg">Available Worldwide</h3>
          <p className="text-gray-200 text-sm">We serve clients from all corners of the globe.</p>
        </div>
      </motion.div>

      {/* Second Video Section */}
      <motion.div className="rounded-2xl overflow-hidden border border-white/10">
        <video
          src={bigVideo2}
          autoPlay
          loop
          muted
          className="w-full h-80 lg:h-130 object-cover rounded-2xl"
        />
      </motion.div>

      {/* Heading for Tools */}
      <motion.h2 
        className="text-3xl md:text-4xl font-[Orbitron]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Everyday toolbox
      </motion.h2>

      {/* Tools Section */}
      <div className="overflow-hidden py-4 relative">
        <motion.div
          className="flex gap-6"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {/* First set of icons */}
          {[
            SiFigma, 
            SiAdobephotoshop, 
            SiReact, 
            SiTailwindcss, 
            SiFramer,
            SiAdobeillustrator,
            SiBlender,
            SiAdobeaftereffects,
            SiSketch,
            SiWebflow,
            SiTypescript,
            SiJavascript,
            SiNodedotjs,
            SiMongodb
          ].map((Icon, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center min-w-[100px] h-[100px] border border-white/30 rounded-2xl"
              whileHover={{ scale: 1.1, y: -5, borderColor: "rgba(255, 255, 255, 0.6)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="text-4xl text-white" />
            </motion.div>
          ))}
          {/* Duplicate set for infinite loop effect */}
          {[
            SiFigma, 
            SiAdobephotoshop, 
            SiReact, 
            SiTailwindcss, 
            SiFramer,
            SiAdobeillustrator,
            SiBlender,
            SiAdobeaftereffects,
            SiSketch,
            SiWebflow,
            SiTypescript,
            SiJavascript,
            SiNodedotjs,
            SiMongodb
          ].map((Icon, i) => (
            <motion.div
              key={`duplicate-${i}`}
              className="flex items-center justify-center min-w-[100px] h-[100px] border border-white/30 rounded-2xl"
              whileHover={{ scale: 1.1, y: -5, borderColor: "rgba(255, 255, 255, 0.6)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="text-4xl text-white" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
