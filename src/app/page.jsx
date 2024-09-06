"use client"
import { motion} from 'framer-motion'
import Hero from "@/components/sections/Hero";

const Homepage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5, delay: 1,}}
      className="w-screen"
    >
      <Hero />
    </motion.div>
  );
};

export default Homepage;
