import songs from "./songs.json";
import { FaSyncAlt } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center cursor-pointer">
          <img
            src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" 
            alt="Profile"
            className="w-10 h-10 rounded-full mr-2"
          />
          <span>Timothy Luca</span>
        </div>
        <FaSyncAlt className='cursor-pointer'/>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recently Played</h2>
          <button className="text-sm text-gray-400">See all</button>
        </div>
        <ul>
          {songs.slice(0, 4).map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-4 cursor-pointer">
              <div className="flex">
                <img
                  src={item.artwork}
                  alt={item.title}
                  className="w-12 h-12 rounded mr-4"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-400">Aespa</p>
                </div>
              </div>

              <p className="text-sm text-gray-400">7 min ago</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">My Playlist</h2>
          <button className="text-sm text-gray-400">See all</button>
        </div>
        <ul>
          {songs.slice(2, 4).map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-4 cursor-pointer">
              <div className="flex">
                <img
                  src={item.artwork}
                  alt={item.title}
                  className="w-12 h-12 rounded mr-4"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-400">Aespa</p>
                </div>
              </div>

              <p className="text-sm text-gray-400">7 min ago</p>
            </li>
          ))}
        </ul>
      </div>

      <button className="bg-gray-800 text-gray-400 w-full py-2 rounded">
        Create New Playlist
      </button>
    </>
  );
};

export default RightSidebar;
