import songs from "./songs.json";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import SongCard from "./SongCard";

export default function MainContent() {
  return (
    <>
      <div className="flex flex-grow items-center gap-4 mb-4">
        <div className="flex gap-2 text-2xl cursor-pointer">
          <MdKeyboardArrowLeft />
          <MdKeyboardArrowRight />
        </div>
        <div className="relative rounded-full px-4 py-2 w-full bg-white">
          <CiSearch className="absolute left-3 top-2/4 transform -translate-y-1/2 text-black" />
          <input
            type="text"
            placeholder="Search for artists, songs, or albums"
            className="bg-transparent w-full pl-10 pr-4 text-sm text-black focus:outline-none"
          />
        </div>
      </div>
      <div className="bg-pink-500 p-6 rounded-lg flex items-center justify-between">
        <div>
          <p className="text-sm uppercase">New Album</p>
          <h1 className="text-4xl font-bold">THE SECOND STEP: CHAPTER ONE</h1>
          <p className="mt-2">TREASURE</p>
          <button className="mt-4 bg-white text-pink-500 px-4 py-2 rounded-full font-semibold">
            Listen Now
          </button>
        </div>
        <img
          src="bts.png" // Replace with actual image path
          alt="Treasure"
          className="h-40 object-cover"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Hello, Woilon</h2>
        <div className="flex justify-between mt-4">
          {songs.slice(0, 4).map((song) => {
            return <SongCard song={song} />;
          })}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Hello, Woilon</h2>
        <div className="flex justify-between mt-4">
          {songs.slice(0, 4).map((song) => {
            return <SongCard song={song} />;
          })}
        </div>
      </div>
    </>
  );
}
