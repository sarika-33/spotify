import { useSelector } from "react-redux";

export default function Player() {
  const { activeSong } = useSelector((state) => state.player);

  if (!activeSong) return null;

  return (
    <div className="fixed bottom-0 w-full bg-black text-white p-4 flex items-center gap-4">
      <p className="font-semibold">{activeSong.title}</p>
      <audio src={activeSong.audio} controls autoPlay />
    </div>
  );
}
