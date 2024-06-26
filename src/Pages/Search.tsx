import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CardMovie from "../Components/CardMovie";
import IMovie from "../Types/IMovie";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { debounce } from "lodash";

export default function Search() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState([]);
  const userSearch = search?.split("=")[1]?.replace(/%20/g, " ");

  const { data: searchData } = useFetch(
    `search/multi?query=${userSearch ?? ""}&page=${page}`
  );

  const handleScroll = useCallback(
    debounce(() => {
      if (
        window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight &&
        page < totalPages
      ) {
        setPage((prev) => prev + 1);
      }
    }, 1000), 
    [page, totalPages]
  );
  useEffect(() => {
    setData((prev) => [...prev, ...searchData]);
  }, [searchData]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
        const res = await axios.get(`/search/multi?query=${userSearch}`);
        setTotalPages(res.data.total_pages);
      } catch (error) {
        console.log(error);
      }
    };

    setData([]);
    setPage(1);
    fetchTotalPages();
  }, [userSearch]);
  return (
    <>
      <Helmet>
        <title>Search Page</title>
        <meta name="description" content=" watch app search page" />
      </Helmet>
      <div className="pt-16">
        <div className="container mx-auto my-5 lg:hidden">
          <input
            value={userSearch}
            type="text"
            className="w-full p-2 mx-2 rounded-lg text-neutral-700"
            onChange={(e) => navigate(`/search?q=${e.target.value}`)}
            placeholder="search "
          />
        </div>
        <div className="container mx-auto my-5">
          <h2 className="px-3 my-5 text-lg font-bold lg:text-2xl ">
            {" "}
            Search Results
          </h2>
          <div className="grid justify-center lg:justify-normal grid-cols-[repeat(auto-fit,230px)] gap-3">
            {data.map((item: IMovie) => (
              <CardMovie
                key={item.id + Math.random() + Date.now()}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
