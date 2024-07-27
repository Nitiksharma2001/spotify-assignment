import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import MusicPlayerControlBar from "./MusicPlayerControlBar";
import RightSidebar from "./RightSidebar";

export default function Home() {
  return (
    <>
      <main className="flex justify-between flex-grow h-screen text-white ">
        <div className="bg-gray-900 w-[15%] p-4">
          <LeftSidebar />
        </div>
        <div className="bg-black p-4 overflow-y-scroll border-red-50 no-scrollbar">
          <MainContent />
        </div>
        <div className="bg-gray-900 w-[20%] p-4">
          <RightSidebar />
        </div>
      </main>
      <div className="absolute w-full bottom-0">
        <MusicPlayerControlBar />
      </div>
    </>
  );
}
