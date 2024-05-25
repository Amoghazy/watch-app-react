import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { Suspense, lazy } from "react";
import Spinner from "./Components/Spinner";

const Home = lazy(() => import("./Pages/Home"));
const Explore = lazy(() => import("./Pages/Explore"));
const Search = lazy(() => import("./Pages/Search"));
const Details = lazy(() => import("./Pages/Details"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <div className="min-w-full min-h-[90vh] flex items-center justify-center">
                <Spinner />
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "search",
        element: (
          <Suspense
            fallback={
              <div className="min-w-full min-h-[90vh] flex items-center justify-center">
                <Spinner />
              </div>
            }
          >
            <Search />
          </Suspense>
        ),
      },
      {
        path: ":explore",
        element: (
          <Suspense
            fallback={
              <div className="min-w-full min-h-[90vh] flex items-center justify-center">
                <Spinner />
              </div>
            }
          >
            <Explore />
          </Suspense>
        ),
      },
      {
        path: ":explore/:id",
        element: (
          <Suspense
            fallback={
              <div className="min-w-full min-h-[90vh] flex items-center justify-center">
                <Spinner />
              </div>
            }
          >
            <Details />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
