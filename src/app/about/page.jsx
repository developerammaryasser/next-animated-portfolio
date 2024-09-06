"use client";
import { motion } from "framer-motion";
import Biography from "@/components/sections/Biography";
import Skills from "@/components/sections/Skills";

const About = () => {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 1 }}
    className="py-16 relative">
      <div className="container space-y-16 flex flex-col items-stretch justify-start">
        <section>
          <Biography />
        </section>
        <section>
          <Skills />
        </section>
      </div>
    </motion.section>
  );
};
export default About;
