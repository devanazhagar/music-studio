"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.902-.539-5.588-1.543L.057 24zM6.598 4.819c.478-.22 1.488-.732 1.7-1.11.21-.378.377-.58.591-.58.211 0 .42.019.58.019.16 0 .418.02.633.458.21.438.729 1.766.788 1.899.059.133.118.299.02.478-.1.179-.178.299-.357.478-.179.178-.357.38-.536.529-.179.148-.298.238-.118.477.179.239.757.997 1.635 1.798l.04.038c.877.76 1.767 1.251 2.067 1.489.3.238.419.198.591.118.171-.08.478-.238.656-.477.179-.239.298-.448.478-.448.179 0 .418.019.59.019s1.1.16 1.28.298c.179.139.298.748.238 1.488-.059.749-.536 1.379-.655 1.518-.12.138-1.041.958-1.518 1.11-.478.148-.957.148-1.518.02-.56-.129-1.28-.418-1.84-.818-1.119-.8-2.548-2.52-2.548-2.52s-.979-1.169-1.169-1.578c-.19-.418-.38-.656-.38-.957.0-.298.19-.448.357-.588z" />
  </svg>
);

export function WhatsappButton() {
  const phoneNumber = "+919876543210";
  const message = "Hello! I'm interested in the music classes at Harmony Hub.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.div
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        asChild
        size="icon"
        className="w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#128C7E] text-white"
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <WhatsAppIcon />
        </a>
      </Button>
    </motion.div>
  );
}
