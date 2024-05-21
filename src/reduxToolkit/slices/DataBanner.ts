import { createSlice } from "@reduxjs/toolkit";

const dataBannerSlice = createSlice({
  name: "dataBanner",
  initialState: {
    bannerData: [],
  },
  reducers: {
    setDataBanner: (state, action) => {
      state.bannerData = action.payload;
    },
  },
});
export const { setDataBanner } = dataBannerSlice.actions;

export default dataBannerSlice.reducer;
