import LeftSidebar from "./LeftSidebar";

export default function Home() {
  return (
    <main className='flex justify-between'>
      <div className='bg-gray-900 w-1/4 p-4 h-screen'>
        <LeftSidebar/>
      </div>
      {/* <div className='bg-gray-900 w-1/2 p-4 h-screen'>
        <LeftSidebar/>
      </div> */}
      <div className='bg-gray-900 w-1/4 p-4 h-screen'>
        {/* <LeftSidebar/> */}
      </div>
    </main>
  );
}
