import {
  MdHome,
  MdExplore,
  MdPlaylistAdd,
  MdDownload,
  MdFavorite,
  MdFolder,
} from "react-icons/md";
export default function LeftSidebar() {
  return (
    <>
      <h1 className="text-4xl font-bold my-4">
        <img src="gradient.png" className='h-12 cursor-pointer' alt="" />
      </h1>
      <div className="flex flex-col space-y-4 font-bold">
        <h2 className="text-sm font-semibold text-gray-600">FEATURES</h2>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center text-gray-400 space-x-4 cursor-pointer">
            <MdHome size={30} />
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-400 cursor-pointer">
            <MdExplore size={30} />
            <span>Discover</span>
          </div>
          <div className="flex items-center space-x-4 text-blue-500 cursor-pointer">
            <MdPlaylistAdd size={30} />
            <span>Collections</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 mt-8 font-bold">
        <h2 className="text-sm font-semibold text-gray-600">LIBRARY</h2>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-4 text-gray-400 cursor-pointer">
            <MdDownload size={30} />
            <span>Download</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-400 cursor-pointer">
            <MdFavorite size={30} />
            <span>Favourites</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-400 cursor-pointer">
            <MdFolder size={30} />
            <span>Local Files</span>
          </div>
        </div>
      </div>
    </>
  );
}
