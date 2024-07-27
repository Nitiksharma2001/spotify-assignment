import songs from "./songs.json";
export default function MainContent() {
  return (
    <>
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
            return (
              <div className="rounded-lg cursor-pointer">
                <img
                  src={song.artwork} // Replace with actual image path
                  alt="Today's Hot Hits"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <p className="mt-2 font-semibold">{song.title}</p>
                <p className="text-gray-400 text-sm">
                  The most played tracks right now
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Hello, Woilon</h2>
        <div className="flex justify-between mt-4">
          {songs.slice(0, 4).map((song) => {
            return (
              <div className="rounded-lg cursor-pointer">
                <img
                  src={song.artwork} // Replace with actual image path
                  alt="Today's Hot Hits"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <p className="mt-2 font-semibold">{song.title}</p>
                <p className="text-gray-400 text-sm">
                  The most played tracks right now
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
