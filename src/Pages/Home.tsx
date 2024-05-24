import { useSelector } from "react-redux";
import BannerHome from "../Components/BannerHome";
import CarouselCards from "../Components/CarouselCards";
import Istate from "../Types/ISTATE";

import useFetch from "../hooks/useFetch";

export default function Home() {
  const { bannerData } = useSelector((state: Istate) => state.dataBanner);
  const { data: nowplayingData } = useFetch("movie/now_playing");
  const { data: topRatedData } = useFetch("movie/top_rated");
  const { data: popularityData } = useFetch("movie/popular");
  const { data: popularityTvShowsData } = useFetch("tv/popular");
  const { data: onTheAirData } = useFetch("tv/on_the_air");

  return (
    <div className="">
      <BannerHome />
      <CarouselCards data={bannerData} heading={"Trending"} />
      <CarouselCards
        data={nowplayingData}
        heading={"Now Playing"}
        media_type="movie"
      />
      <CarouselCards
        data={topRatedData}
        heading={"Top Rated"}
        media_type="movie"
      />
      <CarouselCards
        data={popularityData}
        heading={"Popular Movies"}
        media_type="movie"
      />
      <CarouselCards
        data={popularityTvShowsData}
        heading={"Popular TV Shows"}
        media_type="tv"
      />
      <CarouselCards
        data={onTheAirData}
        heading={"ON The Air"}
        media_type="tv"
      />
    </div>
  );
}
