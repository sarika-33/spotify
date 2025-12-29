import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSong: null,
  isPlaying: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playSong: (state, action) => {
      state.activeSong = action.payload;
      state.isPlaying = true;
    },
    pauseSong: (state) => {
      state.isPlaying = false;
    }
  }
});

export const { playSong, pauseSong } = playerSlice.actions;
export default playerSlice.reducer;
