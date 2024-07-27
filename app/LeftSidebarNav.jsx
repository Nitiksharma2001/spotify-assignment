import { FaGetPocket } from "react-icons/fa";
import { MdExplore, MdHome, MdPlaylistAdd } from "react-icons/md";

export default function LeftSidebarNav() {
  return (
    <>
      <div className="flex flex-col items-center text-gray-400 cursor-pointer lg:flex-row">
        <MdHome size={30} />
        <span className='ml-2'>Home</span>
      </div>
      <div className="flex flex-col items-center text-gray-400 cursor-pointer lg:flex-row">
        <MdExplore size={30} />
        <span className='ml-2'>Discover</span>
      </div>
      <div className="flex flex-col items-center text-blue-500 cursor-pointer lg:flex-row">
        <MdPlaylistAdd size={30} />
        <span className='ml-2'>Collections</span>
      </div>

      <div className="flex flex-col items-center text-gray-400 cursor-pointer lg:flex-row">
        <FaGetPocket size={30} />
        <span className='ml-2'>Get App</span>
      </div>
    </>
  );
}
