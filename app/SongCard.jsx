"use client";
import { motion } from "framer-motion";

const SongCard = ({ song }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="rounded-lg cursor-pointer"
    >
      <img
        src={song.artwork} // Replace with actual image path
        alt="Today's Hot Hits"
        className="w-full h-40 object-cover rounded-lg"
      />
      <p className="mt-2 font-semibold">{song.title}</p>
      <p className="text-gray-400 text-sm">The most played tracks right now</p>
    </motion.div>
  );
};

export default SongCard;
