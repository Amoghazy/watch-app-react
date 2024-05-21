import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Search from "./Pages/Search";
import Details from "./Pages/Details";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: ":explore",
        element: <Explore />,
      },
      {
        path: ":explore/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
