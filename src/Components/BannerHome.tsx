import { useSelector } from "react-redux";
import Istate from "../Types/ISTATE.ts";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
export default function BannerHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { bannerData } = useSelector((state: Istate) => state.dataBanner);
  const { base_urlImage } = useSelector((state: Istate) => state.base_urlImage);

  const handelPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
    if (currentSlide === 0) {
      setCurrentSlide(bannerData.length - 1);
    }
  };

  const handelNext = () => {
    if (currentSlide < bannerData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (currentSlide == bannerData.length - 1) {
      setCurrentSlide(0);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      // handelNext();
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden  ">
        {bannerData?.map((item, i) => {
          return (
            <div
              key={i}
              className="relative min-w-full min-h-[450px]  overflow-hidden lg:min-h-full group"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              <div className="w-full h-full ">
                <img
                  src={base_urlImage + item.backdrop_path}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute top-0 z-40 items-center justify-between hidden w-full h-full my-7 group-hover:lg:flex">
                <button
                  onClick={handelPrevious}
                  className="w-10 rounded-e h-[calc(100%-8rem)] text-2xl text-center text-white opacity-50 cursor-pointer bg-gradient-to-t from-neutral-900 to-black ps-2 hover:opacity-75"
                >
                  <FaAngleLeft />
                </button>
                <button
                  onClick={handelNext}
                  className="w-10 absolute rounded-s  right-0 h-[calc(100%-8rem)] text-2xl text-center text-white opacity-50 cursor-pointer bg-gradient-to-t from-neutral-900 to-black hover:opacity-75 ps-2 "
                >
                  <FaAngleRight />
                </button>
              </div>
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
              <div className="container mx-auto ">
                <div className="absolute bottom-0 z-50 w-full max-w-md px-3">
                  <h2 className="text-2xl font-bold text-white lg:text-4xl">
                    {" "}
                    {item.title || item.name}
                  </h2>
                  <p className="text-sm text-neutral-400 lg:text-lg line-clamp-3 ">
                    {item.overview}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <p>Rating:{+item.vote_average.toFixed(1)}</p>
                    <p className="font-bold">|</p>
                    <p>View: {+item.popularity.toFixed(0)}</p>
                  </div>
                  <button className="p-2 px-4 my-4 font-bold text-black transition-all bg-white rounded hover:scale-105 hover:bg-gradient-to-tr from-orange-400 to-red-700">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
