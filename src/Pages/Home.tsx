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

  return (
    <div className="">
      <BannerHome />
      <CarouselCards data={bannerData} heading={"Trending"} />
      <CarouselCards data={nowplayingData} heading={"Now Playing"} />
      <CarouselCards data={topRatedData} heading={"Top Rated"} />
      <CarouselCards data={popularityData} heading={"Popularity"} />
    </div>
  );
}
