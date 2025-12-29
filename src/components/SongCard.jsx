import { useDispatch } from "react-redux";
import { playSong } from "../redux/playerSlice";
import { Link } from "react-router-dom";

export default function SongCard({ song, darkMode }) {
  const dispatch = useDispatch();

  return (
    <div
      className={
        darkMode
          ? "bg-gray-800 text-white p-4 rounded-lg shadow-md"
          : "bg-white text-black p-4 rounded-lg shadow-md border"
      }
    >
      <img
        src={song.image}
        alt={song.title}
        className="w-full h-40 object-cover rounded mb-3"
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/400x300?text=No+Image";
        }}
      />

      <h3 className="font-bold">{song.title}</h3>
      <p className="text-sm text-gray-500">{song.artist}</p>

      <div className="flex gap-4 mt-3">
        <button
          onClick={() => dispatch(playSong(song))}
          className="text-green-500 font-semibold"
        >
          Play
        </button>

        <Link to={`/song/${song.id}`} className="text-blue-500">
          Details
        </Link>
      </div>
    </div>
  );
}
