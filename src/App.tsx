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
    const fetchData = async () => {
      const [trendingRes, configRes] = await Promise.all([
        axios.get("/trending/all/week?language=en-US"),
        axios.get("/configuration"),
      ]);

      dispatch(setDataBanner(trendingRes.data.results));
      dispatch(
        setBase_urlImage(configRes.data.images.secure_base_url + "original")
      );
    };

    fetchData();
  }, [dispatch]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
