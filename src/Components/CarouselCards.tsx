/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import IMovie from "../Types/IMovie";
import CardMovie from "./CardMovie";
import { useRef } from "react";

export default function CarouselCards({
  data,
  heading,
  media_type,
}: {
  data: IMovie[];
  heading: string;
  media_type?: string;
}) {
  const container = useRef<HTMLDivElement>(null);
  const handelPrevious = () => {
    if (container.current) {
      container.current.scrollLeft -= 250;
    }
  };
  const handelNext = () => {
    if (container.current) {
      container.current.scrollLeft += 250;
    }
  };
  return (
    <div className="my-24 ">
      <h1 className="px-3 my-6 text-2xl font-bold capitalize lg:text-4xl">
        {heading}
      </h1>
      <div className="relative">
        <div
          ref={container}
          className="  transtio-all  grid grid-cols-[repeat(auto-fit,230px)] gap-4  grid-flow-col overflow-x-scroll scroll-smooth scrollbar-none "
        >
          {" "}
          {data.map((item, index) => (
            <CardMovie
              key={item.id}
              item={item}
              index={index + 1}
              heading={heading}
              media_type={media_type}
            />
          ))}{" "}
        </div>

        <button
          onClick={handelPrevious}
          className="absolute top-0 z-20 hidden w-10 h-full text-2xl text-white bg-black opacity-50 hover:opacity-75 ps-2 lg:block"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={handelNext}
          className="absolute top-0 right-0 z-20 hidden w-10 h-full text-2xl text-white bg-black opacity-50 lg:block hover:opacity-75 ps-2 "
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
