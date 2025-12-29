import { useParams } from "react-router-dom";
import { songs } from "../services/songs";

export default function SongDetails() {
  const { id } = useParams();
  const song = songs.find(s => s.id == id);

  if (!song) return <p>Loading...</p>;

  return (
    <div className="p-6 text-white">
      <h1>{song.title}</h1>
      <p>{song.artist}</p>
      <p>{song.genre}</p>
    </div>
  );
}
