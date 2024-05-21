/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import IMovie from "../Types/IMovie";
import CardMovie from "./CardMovie";
import { useRef } from "react";

export default function CarouselCards({
  data,
  heading,
}: {
  data: IMovie[];
  heading: string;
}) {
  const container = useRef<HTMLDivElement>(null);
  const handelPrevious = () => {
    if (container.current) {
      container.current.scrollLeft -= container.current.offsetWidth;
    }
  };
  const handelNext = () => {
    if (container.current) {
      container.current.scrollLeft += container.current.offsetWidth;
    }
  };
  return (
    <div className="px-3 my-6">
      <h1 className="my-3 text-2xl font-bold lg:text-4xl">{heading}</h1>
      <div className="relative">
        <div
          ref={container}
          className=" px-2  grid grid-cols-[repeat(auto-fit,230px)] gap-4  grid-flow-col overflow-x-scroll scroll-smooth scrollbar-none "
        >
          {" "}
          {data.map((item, index) => (
            <div key={item.id} className="w-full h-full">
              <CardMovie item={item} index={index + 1} trend={true} />
            </div>
          ))}{" "}
        </div>

        <button
          onClick={handelPrevious}
          className="absolute top-0 z-50 w-10 h-full text-2xl text-white bg-black opacity-50 idden left-2 hover:opacity-75 ps-2 lg:block"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={handelNext}
          className="absolute top-0 right-0 z-50 hidden w-10 h-full text-2xl text-white bg-black opacity-50 lg:block hover:opacity-75 ps-2 "
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
