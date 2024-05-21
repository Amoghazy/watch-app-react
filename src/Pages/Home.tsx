import { useSelector } from "react-redux";
import BannerHome from "../Components/BannerHome";
import CarouselCards from "../Components/CarouselCards";
import Istate from "../Types/ISTATE";

export default function Home() {
  const { bannerData } = useSelector((state: Istate) => state.dataBanner);

  return (
    <div className="">
      <BannerHome />
      <CarouselCards data={bannerData} heading={"Trending"} />
    </div>
  );
}
