/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import bottle from "../assets/products/bottle.jpg";
import cam from "../assets/products/cam.jpg";
import earphone from "../assets/products/earphone.jpg";
import AboutUS from "../pages/About"

const Service = () => {
  const productSections = [
    {
      id: 1,
      title: "Product Design",
      description:
        "Our product design solutions focus on user experience, functionality, and aesthetic appeal. Every detail is crafted to make your product intuitive and visually compelling.",
      image: bottle,
    },
    {
      id: 2,
      title: "Camera Design",
      description:
        "We create sleek, functional, and modern camera designs that blend technology with aesthetics. Every camera is built for usability and style.",
      image: cam,
    },
    {
      id: 3,
      title: "Audio & Earphones",
      description:
        "From earbuds to headphones, our audio designs ensure comfort, clarity, and innovation. We craft devices that provide an immersive listening experience.",
      image: earphone,
    },
  ];

  // Variants for staggered card animations
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    hover: { scale: 1.03, y: -5 },
  };

  const imageVariants = {
    hover: { scale: 1.05 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative gap-10 p-4 sm:p-6 md:p-8 bg-black text-white rounded-2xl"
      style={{ minHeight: "calc(100vh - 1.5rem*2)" }}
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Heading */}
      <div className="flex flex-col gap-2 mb-8 max-w-3xl">
        <h2 className="text-sm text-amber-400 tracking-widest">[ SERVICES & EXPERTISE ]</h2>
        <h1 className="text-3xl md:text-4xl font-bold">Digital Motion Animation</h1>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          We create digital experiences that blend creativity with technology,
          specializing in web design, 3D motion, digital art, and brand identity.
          Every project is crafted with purpose to make your vision come alive.
        </p>
      </div>

      {/* Cards */}
      <motion.div className="flex flex-col lg:flex-row gap-6">
        {productSections.map((section) => (
          <motion.div
            key={section.id}
            className="flex-1 bg-black border border-white/20 rounded-2xl overflow-hidden shadow-md cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Image */}
            <motion.img
              src={section.image}
              alt={section.title}
              className="w-full h-64 object-cover rounded-t-2xl"
              variants={imageVariants}
              transition={{ duration: 0.5 }}
            />
            {/* Text */}
            <motion.div
              className="p-4"
              variants={textVariants}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-medium font-[Orbitron] mb-2">{section.title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">{section.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
     
    </motion.div>
  );
};

export default Service;
