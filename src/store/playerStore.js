import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePlayerStore = create(
  persist(
    (set, get) => ({
      currentSong: null,
      lastPlayedSong: null,
      isPlaying: false,
      darkMode: true,
      lastGenre: "All",

      playSong: (song) => {
        const prevSong = get().currentSong;

        set({
          lastPlayedSong: prevSong,
          currentSong: song,
          isPlaying: true,
        });
      },

      togglePlay: () =>
        set((state) => ({ isPlaying: !state.isPlaying })),

      toggleTheme: () =>
        set((state) => ({ darkMode: !state.darkMode })),

      setGenre: (genre) => set({ lastGenre: genre }),
    }),
    {
      name: "spotify-week6-storage",
    }
  )
);

export default usePlayerStore;
