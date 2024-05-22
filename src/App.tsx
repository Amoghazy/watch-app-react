import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routerConfig";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDataBanner } from "./reduxToolkit/slices/DataBanner";
import { setBase_urlImage } from "./reduxToolkit/slices/image_base_url";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await axios.get("/trending/all/week?language=en-US");

      dispatch(setDataBanner(res.data.results));
    })();
    (async () => {
      const res = await axios.get("/configuration");

      dispatch(setBase_urlImage(res.data.images.secure_base_url + "original"));
    })();
  });
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
