"use client";
import Navbar from "@/components/layouts/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
const AnimationProvider = ({ children }) => {
  const pathName = usePathname();
  const pageName =
    pathName.split("/")[1] !== "" ? pathName.split("/")[1] : "Home";
  return (
    <AnimatePresence mode="wait">
      <div className="size-screen" key={pathName}>
        <motion.div
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-slate-900 rounded-b-[100px] fixed w-screen z-[9999]"
        />
        <motion.div
          initial={{ opacity: "100%" }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="capitalize text-3xl font-bold fixed left-0 top-0 right-0 bottom-0 m-auto text-white cursor-default w-fit h-fit z-[9999]"
        >
          {pageName}
        </motion.div>
        <motion.div
          initial={{ height: "140vh" }}
          animate={{ height: "0vh" }}
          transition={{ delay: 0.5 }}
          className="bg-slate-900 rounded-t-[100px] fixed bottom-0 w-screen z-[5000]"
        />
        <Navbar />
        {/* <motion.div key={pathName} className="">{pageName}</motion.div> */}
        {children}
      </div>
    </AnimatePresence>
  );
};
export default AnimationProvider;
