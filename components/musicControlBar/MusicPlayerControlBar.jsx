"use client";
import {
  FaHeart,
  FaPlus,
  FaRandom,
  FaStepBackward,
  FaStepForward,
  FaSync,
  FaVolumeUp,
  FaMicrophone,
  FaDesktop,
  FaShareAlt,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import useMusicController from "./useMusicController";
import { BsFillMicMuteFill } from "react-icons/bs";

export default function MusicPlayerControlBar({ src }) {
  const {
    changePlayback,
    forBackAudio,
    onProgressChange,
    onLoadedMetadata,
    onVolumeChange,
    toggleVolume,
    updateProgress,
    progressId,
    isPlaying,
    isMuted,
    audioRef,
    progressRef,
    volumeRef,
  } = useMusicController(src);

  if (!src) return;

  return (
    <div className="bg-black text-white p-4 flex items-center justify-between">
      <audio
        ref={audioRef}
        onPlay={() => updateProgress()}
        onPause={() => clearInterval(progressId)}
        onLoadedMetadata={onLoadedMetadata}
        src={src}
      ></audio>
      <div className="hidden lg:flex items-center w-1/5">
        <div className="mr-4">
          <p className="text-sm font-semibold">Date</p>
          <p className="text-xs text-gray-400">あれくん</p>
        </div>
        <button className="mx-2">
          <FaHeart />
        </button>
        <button className="mx-2">
          <FaPlus />
        </button>
      </div>

      <div className="flex flex-col items-center gap-4 flex-grow mx-4">
        <div>
          <button className="mx-2">
            <FaRandom />
          </button>
          <button className="mx-2" onClick={() => forBackAudio(-1)}>
            <FaStepBackward />
          </button>
          <button className="mx-2" onClick={changePlayback}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="mx-2" onClick={() => forBackAudio()}>
            <FaStepForward />
          </button>
          <button className="mx-2">
            <FaSync />
          </button>
        </div>

        <div className="flex items-center w-full mx-4">
          <input
            type="range"
            onChange={onProgressChange}
            ref={progressRef}
            className="w-full"
            defaultValue={0}
          />
        </div>
      </div>

      <div className="hidden lg:flex items-center w-1/5">
        <button className="mx-2">
          <FaVolumeUp />
        </button>
        <div className="w-24 mx-2">
          <input
            ref={volumeRef}
            onChange={onVolumeChange}
            type="range"
            className="w-full h-1 bg-blue-500 rounded-lg appearance-none"
          />
        </div>
        <button className="mx-2" onClick={toggleVolume}>
          {isMuted ? <BsFillMicMuteFill /> : <FaMicrophone />}
        </button>
        <button className="mx-2">
          <FaDesktop />
        </button>
        <button className="mx-2">
          <FaShareAlt />
        </button>
      </div>
    </div>
  );
}
