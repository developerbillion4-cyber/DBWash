import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/13055556789"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        delay: 1 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-8 h-8" />
      <span className="sr-only">Contact us on WhatsApp</span>
      
      {/* Pulse effect */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />
    </motion.a>
  );
}
