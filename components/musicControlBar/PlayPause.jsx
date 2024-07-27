'use client'
import { FaPause, FaPlay } from "react-icons/fa";
import { useState } from "react";

export default function PlayPause() {
  const [isPlay, setIsPlay] = useState(false);
  const onChange = () => {
    setIsPlay(!isPlay)
  }
  return (
    <button className="mx-2" onClick={onChange}>
      {isPlay ? <FaPlay /> : <FaPause />}
    </button>
  );
}
