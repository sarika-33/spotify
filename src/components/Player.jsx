import { useEffect, useRef } from "react";
import usePlayerStore from "../store/playerStore";

export default function Player() {
  const audioRef = useRef(null);

  const {
    currentSong,
    lastPlayedSong,
    isPlaying,
    togglePlay,
  } = usePlayerStore();

  // 🎯 Sync audio with Zustand play/pause state
  useEffect(() => {
    if (!audioRef.current || !currentSong) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 z-50">
      {/* SONG INFO */}
      <p className="font-semibold">
        Now Playing: {currentSong.title}
      </p>

      <p className="text-sm text-gray-400">
        Last Played: {lastPlayedSong ? lastPlayedSong.title : "None"}
      </p>

      {/* CONTROLS */}
      <div className="flex items-center gap-4 mt-3">
        <button
          onClick={togglePlay}
          className="px-4 py-1 bg-green-500 text-black rounded"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <audio
          ref={audioRef}
          src={currentSong.audio}
        />
      </div>
    </div>
  );
}
