"use client";
import { projects } from "@/data";
import Image from "next/image";
import Button from "../elements/Button";
import { motion } from "framer-motion";
// Variants
const main = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 1,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const mainChildren = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
const Projects = () => {
  return (
    <motion.div
      variants={main}
      initial="hidden"
      animate="visible"
      className="py-16 flex flex-col gap-16"
    >
      {projects.map(({ imageCover, title, text, id, link }) => (
        <motion.div
          key={id}
          variants={mainChildren}
          className="h-[42rem] md:h-[24rem] rounded-2xl bg-slate-100 border flex flex-col md:flex-row justify-start items-center text-center md:text-start gap-8 overflow-hidden"
        >
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
            <Image src={imageCover} alt={title} fill className="object-cover" />
          </div>
          <div className="flex flex-col items-start text-start gap-4 h-1/2 md:h-fit md:w-1/2 p-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h2>
            <p className="line-clamp-3">{text}</p>
            <Button href={link} className="px-8 py-3 mt-4 ml-0">
              Live View
            </Button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
export default Projects;
