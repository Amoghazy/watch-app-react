import { createSlice } from "@reduxjs/toolkit";

const base_urlImageSlice = createSlice({
  name: "base_urlImage",
  initialState: {
    base_urlImage: "",
  },
  reducers: {
    setBase_urlImage: (state, action) => {
      state.base_urlImage = action.payload;
    },
  },
});

export const { setBase_urlImage } = base_urlImageSlice.actions;

export default base_urlImageSlice.reducer;
