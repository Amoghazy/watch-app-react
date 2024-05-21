/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import Istate from "../Types/ISTATE";
import IMovie from "../Types/IMovie";
import moment from "moment";

export default function CardMovie({
  item,
  index,
  trend,
}: {
  item: IMovie;
  index: number;
  trend: boolean;
}) {
  const { base_urlImage } = useSelector((state: Istate) => state.base_urlImage);
  console.log(index);
  return (
    <div className=" w-[230px] relative ">
      <div>
        {" "}
        <img src={base_urlImage + item.poster_path} alt="" />
      </div>
      {trend && (
        <div className="absolute top-0 right-0 p-2 text-xs text-white bg-red-500 rounded-br-xl">
          {` Trend #${index}`}
        </div>
      )}
      <div className="absolute bottom-0 flex flex-col justify-between w-full h-16 px-2 text-white items bg-black/70 backdrop-blur">
        <span className="mt-2 text-xl font-semibold text-ellipsis line-clamp-1">
          {item.title || item.name}
        </span>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold line-clamp-1 text-neutral-600">
            {moment(item.release_date).format("MMMM Do YYYY")}
          </span>
          <span className="p-1 mb-1 text-xs bg-black rounded">
            Rating: {item.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
}
