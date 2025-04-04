import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { IoCall } from "react-icons/io5";

const FloatingButtons = () => {
  return (
    <AnimatePresence>
      <div className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-4">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/9860945554" // Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#C1A35F] text-white p-4 rounded-full shadow-xl flex items-center justify-center"
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 50 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp className="text-2xl" />
          <span className="sr-only">WhatsApp</span>
        </motion.a>

        {/* Call Button */}
        <motion.a
          href="tel:9209841329" // Replace with your number
          className="bg-[#C1A35F] text-white p-4 rounded-full shadow-xl flex items-center justify-center"
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 50 }}
          transition={{
            delay: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <IoCall className="text-2xl" />
          <span className="sr-only">Call Us</span>
        </motion.a>
      </div>
    </AnimatePresence>
  );
};

export default FloatingButtons;