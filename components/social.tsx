"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoCall } from "react-icons/io5";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-4">
      
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/9820296914"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#ce1211] text-white p-4 rounded-full shadow-xl flex items-center justify-center"
        initial={false}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="text-2xl" />
      </motion.a>

      {/* Call */}
      <motion.a
        href="tel:8806081348"
        className="bg-[#ce1211] text-white p-4 rounded-full shadow-xl flex items-center justify-center"
        initial={false}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <IoCall className="text-2xl" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;