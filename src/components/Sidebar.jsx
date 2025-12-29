export default function Sidebar({ darkMode }) {
  return (
    <div
      className={
        darkMode
          ? "w-60 min-h-screen bg-gray-900 text-white p-4"
          : "w-60 min-h-screen bg-gray-100 text-black p-4 border-r"
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
