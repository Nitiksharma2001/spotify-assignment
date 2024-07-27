import LeftSidebar from "../components/leftSidebar/LeftSidebar";
import LeftSidebarNav from "../components/leftSidebar/LeftSidebarNav";
import MainContent from "../components/mainContent/MainContent";
import MusicPlayerControlBar from "../components/musicControlBar/MusicPlayerControlBar";
import RightSidebar from "../components/rightSidebar/RightSidebar";

export default function Home() {
  return (
    <>
      <main className="h-screen flex flex-grow text-white">
        <div className="lg:block hidden bg-gray-900 w-[15%] p-4">
          <LeftSidebar />
        </div>
        <div className="bg-black p-4 overflow-y-scroll min-w-[70%] border-red-50 no-scrollbar">
          <MainContent />
        </div>
        <div className="xl:block hidden bg-gray-900 w-[45%] p-4">
          <RightSidebar />
        </div>
      </main>
      <div className="absolute w-full bottom-16 lg:bottom-0">
        <MusicPlayerControlBar />
      </div>
      <div className="lg:hidden flex justify-between px-4 h-16 items-center absolute bottom-0 bg-black w-full">
        <LeftSidebarNav />
      </div>
    </>
  );
}
