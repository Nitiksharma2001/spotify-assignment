'use client'
import { motion } from "framer-motion";

export default function CreateButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="bg-gray-800 hover:text-white text-gray-400 w-full py-2 rounded"
    >
      Create New Playlist
    </motion.button>
  );
}
