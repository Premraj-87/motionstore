/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

import webDesign from "../assets/images/brading-one.jpg";
import motion3d from "../assets/images/motion-3d.jpg";
import digitalArt from "../assets/images/digital-art.jpg";
import branding from "../assets/images/branding.jpg";
import productDesign from "../assets/images/product-design.jpg";

const Worksection = () => {
  const works = [
    {
      id: 1,
      title: "Web Design",
      subtitle: ["UI/UX", "Frontend", "Responsive"],
      image: webDesign,
    },
    {
      id: 2,
      title: "3D Motion",
      subtitle: ["3D", "Animation", "Rendering"],
      image: motion3d,
    },
    {
      id: 3,
      title: "Digital Art",
      subtitle: ["Illustration", "Concept", "Color Design"],
      image: digitalArt,
    },
    {
      id: 4,
      title: "Brand Identity",
      subtitle: ["Logo", "Strategy", "Guidelines"],
      image: branding,
    },
    {
      id: 5,
      title: "Product Design",
      subtitle: ["Prototype", "UX Research", "Testing"],
      image: productDesign,
    },
  ];

  const areaNames = ["one", "two", "three", "four", "five"];
  return (
    <motion.div className="relative border border-amber-700 p-2 sm:p-4 md:p-6 rounded-2xl flex flex-col gap-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <motion.div className="flex font-poppins items-center gap-2">
          <h1 className="text-3xl">Featured Work</h1>
          <FaChevronDown />
        </motion.div>

        <motion.div className="flex gap-1 font-bold font-[Orbitron] items-center">
          <h2 className="text-sm">All WORK</h2> <FaChevronDown />
        </motion.div>
      </div>

      {/* Grid Section */}
      <div className="grid lg:grid-cols-2  gap-4">
        {" "}
        {works.slice(0, 2).map((work) => (
          <motion.div
            key={work.id}
            className="relative overflow-hidden rounded-2xl group"
            whileHover={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {" "}
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-94 sm:h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
              {" "}
              <h3 className="text-2xl font-semibold mb-1">{work.title}</h3>{" "}
             <p className="text-sm opacity-90">
  <span className="bg-white/30 backdrop-blur-sm px-2 py-1 rounded">
    {work.subtitle.join(", ")}
  </span>
</p>

            </div>{" "}
          </motion.div>
        ))}{" "}
      </div>

{/* row 2 */}
<div className="grid lg:grid-cols-1  gap-4">
        {" "}
        {works.slice(2, 3).map((work) => (
          <motion.div
            key={work.id}
            className="relative overflow-hidden rounded-2xl group"
            whileHover={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {" "}
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-94 lg:h-150 sm:h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
              {" "}
              <h3 className="text-2xl font-semibold mb-1">{work.title}</h3>{" "}
             <p className="text-sm opacity-90">
  <span className="bg-white/30 backdrop-blur-sm px-2 py-1 rounded">
    {work.subtitle.join(", ")}
  </span>
</p>

            </div>{" "}
          </motion.div>
        ))}{" "}
      </div>

      {/* row 3 */}
      <div className="grid lg:grid-cols-2  gap-4">
        {" "}
        {works.slice(3,5).map((work) => (
          <motion.div
            key={work.id}
            className="relative overflow-hidden rounded-2xl group"
            whileHover={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {" "}
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-94 sm:h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
              {" "}
              <h3 className="text-2xl font-semibold mb-1">{work.title}</h3>{" "}
             <p className="text-sm opacity-90">
  <span className="bg-white/30 backdrop-blur-sm px-2 py-1 rounded">
    {work.subtitle.join(", ")}
  </span>
</p>

            </div>{" "}
          </motion.div>
        ))}{" "}
      </div>






      
    </motion.div>
  );
};

export default Worksection;
