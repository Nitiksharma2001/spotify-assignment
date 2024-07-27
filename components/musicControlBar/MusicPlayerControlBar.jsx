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
} from "react-icons/fa";
import PlayPause from "./PlayPause";

export default function MusicPlayerControlBar() {
  return (
    <div className="bg-black text-white p-4 flex items-center justify-between">
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
          <button className="mx-2">
            <FaStepBackward />
          </button>
          <PlayPause/>
          <button className="mx-2">
            <FaStepForward />
          </button>
          <button className="mx-2">
            <FaSync />
          </button>
        </div>

        <div className="flex items-center w-full mx-4">
          <div className="w-full bg-gray-600 h-1 rounded-lg">
            <div
              className="bg-blue-500 h-1 rounded-lg"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center w-1/5">
        <button className="mx-2">
          <FaVolumeUp />
        </button>
        <div className="w-24 mx-2">
          <input
            type="range"
            className="w-full h-1 bg-blue-500 rounded-lg appearance-none"
          />
        </div>
        <button className="mx-2">
          <FaMicrophone />
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
