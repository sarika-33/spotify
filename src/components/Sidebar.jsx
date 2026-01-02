import usePlayerStore from "../store/playerStore";

export default function Sidebar() {
  const darkMode = usePlayerStore((state) => state.darkMode);

  return (
    <div
      className={
        darkMode
          ? "w-60 min-h-screen bg-gray-900 text-white p-4 transition-all duration-300"
          : "w-60 min-h-screen bg-gray-100 text-black p-4 border-r transition-all duration-300"
      }
    >
      <h1 className="text-2xl font-bold mb-8">
        Spotify
      </h1>

      <p className="cursor-pointer font-medium hover:underline">
        Discover
      </p>
    </div>
  );
}
