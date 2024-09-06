"use client";
import { motion } from "framer-motion";
import { about } from "@/data";

const Skills = () => {
  return (
    <div className="flex flex-col items-stretch justify-start gap-y-8 py-16">
      <h2 className="text-4xl text-center font-bold text-slate-900">Skills</h2>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.3,
              delay: 1,
              when: "beforeChildren",
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap items-center justify-center h-fit gap-4"
      >
        {about.skills.map((skill, key) => (
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
            key={key}
            className="text-white bg-slate-950 px-4 py-2 mr-4 transition-all hover:bg-slate-900 cursor-pointer"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
export default Skills;
