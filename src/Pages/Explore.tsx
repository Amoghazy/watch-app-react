import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardMovie from "../Components/CardMovie";
import IMovie from "../Types/IMovie";
import { Helmet } from "react-helmet-async";

export default function Explore() {
  const { explore } = useParams();
  const [data, setData] = useState<IMovie[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight &&
      page < totalPages
    ) {
      setPage((prev) => prev + 1);
    }
  }, [page, totalPages]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  useEffect(() => {
    setData([]);
    setPage(1);
  }, [explore]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`/discover/${explore}?page=${page}`);
      setData((prev) => [...prev, ...res.data.results]);
      setTotalPages(res.data.total_pages);
    })();
  }, [page, explore]);
  return (
    <>
      <Helmet>
        <title>{explore?.toUpperCase()}</title>
        <meta name="description" content=" watch app exlore page" />
      </Helmet>
      <div className="px-3 pt-16">
        <div className="container mx-auto">
          <h3 className="my-4 text-lg font-semibold capitalize lg:text-xl">
            Popular {explore} Show
          </h3>
          <div className="grid  grid-cols-[repeat(auto-fit,230px)] gap-3 justify-center lg:justify-normal">
            {data.map((item: IMovie) => (
              <CardMovie
                key={item.id + Math.random() + Date.now()}
                item={item}
                media_type={explore}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
