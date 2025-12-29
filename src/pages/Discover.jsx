import { useEffect, useState } from "react";
import { songs } from "../services/songs";
import SongCard from "../components/SongCard";
import TopPlay from "../components/TopPlay";

export default function Discover({ darkMode, setDarkMode }) {
  const [loading, setLoading] = useState(true);
  const [genre, setGenre] = useState("All");

  // simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const genres = ["All", ...new Set(songs.map((song) => song.genre))];

  const filteredSongs =
    genre === "All"
      ? songs
      : songs.filter((song) => song.genre === genre);

  // 🔹 LOADING STATE
  if (loading) {
    return (
      <div
        className={
          darkMode
            ? "p-6 min-h-screen bg-gray-900 text-white"
            : "p-6 min-h-screen bg-gray-100 text-black"
        }
      >
        <TopPlay />
        <p className="mt-4">Loading...</p>
      </div>
    );
  }

  return (
    <div
      className={
        darkMode
          ? "p-6 min-h-screen bg-gray-900 text-white"
          : "p-6 min-h-screen bg-gray-100 text-black"
      }
    >
      {/* 🔹 HEADER WITH THEME TOGGLE (TOP-RIGHT) */}
      <div className="flex items-center justify-between mb-6">
        <TopPlay />

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={
            darkMode
              ? "px-4 py-2 rounded bg-green-500 text-white"
              : "px-4 py-2 rounded bg-gray-800 text-white"
          }
        >
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>

      {/* 🔹 GENRE FILTER */}
      <div className="my-4">
        <label className="mr-2 font-semibold">Filter by Genre:</label>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className={
            darkMode
              ? "bg-gray-800 text-white p-2 rounded"
              : "bg-gray-200 text-black p-2 rounded"
          }
        >
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {/* 🔹 SONG LIST */}
      {filteredSongs.length === 0 ? (
        <p>No songs available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSongs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              darkMode={darkMode}
            />

          ))}
        </div>
      )}
    </div>
  );
}
