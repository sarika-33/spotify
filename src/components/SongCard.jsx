import usePlayerStore from "../store/playerStore";
import { Link } from "react-router-dom";

export default function SongCard({ song, darkMode }) {
  const playSong = usePlayerStore((state) => state.playSong);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-800 p-4 rounded-lg text-white transition-all duration-300"
          : "bg-white p-4 rounded-lg text-black shadow transition-all duration-300"
      }
    >
      {/* 🎵 SONG IMAGE */}
      <img
        src={song.image}
        alt={song.title}
        className="w-full h-40 object-cover rounded mb-3"
      />

      {/* 🎶 SONG DETAILS */}
      <h3 className="font-semibold text-lg">{song.title}</h3>
      <p className="text-sm text-gray-400">{song.artist}</p>
      <p className="text-xs text-gray-500 mt-1">
        Genre: {song.genre}
      </p>

      {/* ▶ ACTION BUTTONS */}
      <div className="flex justify-between items-center mt-3">
        <button
          onClick={() => playSong(song)}
          className="text-green-500 font-medium hover:underline"
        >
          ▶ Play
        </button>

        <Link
          to={`/song/${song.id}`}
          className="text-blue-400 text-sm hover:underline"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
