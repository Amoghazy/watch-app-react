import { configureStore } from "@reduxjs/toolkit";
import dataBanner from "./slices/DataBanner";
import base_urlImage from "./slices/image_base_url";

const store = configureStore({
  reducer: {
    dataBanner,
    base_urlImage,
  },
});

export default store;
