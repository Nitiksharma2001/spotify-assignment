import {
  MdDownload,
  MdFavorite,
  MdFolder,
} from "react-icons/md";
import LeftSidebarNav from "../LeftSidebarNav";
export default function LeftSidebar() {
  return (
    <>
      <h1 className="text-4xl font-bold my-4">
        <img src="gradient.png" className='h-12 cursor-pointer' alt="" />
      </h1>
      <div className="flex flex-col space-y-4 font-bold">
        <h2 className="text-sm font-semibold text-gray-600">FEATURES</h2>
        <div className="flex flex-col space-y-2">
          <LeftSidebarNav/>
        </div>
      </div>

      <div className="flex flex-col space-y-4 mt-8 font-bold">
        <h2 className="text-sm font-semibold text-gray-600">LIBRARY</h2>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-4 text-gray-400 cursor-pointer hover:text-white">
            <MdDownload size={30} />
            <span>Download</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-400 cursor-pointer hover:text-white">
            <MdFavorite size={30} />
            <span>Favourites</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-400 cursor-pointer hover:text-white">
            <MdFolder size={30} />
            <span>Local Files</span>
          </div>
        </div>
      </div>
    </>
  );
}
