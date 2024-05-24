import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetchDetails from "../hooks/useFetchDetails";
import Istate from "../Types/ISTATE";
import Diveder from "../Components/Diveder";
import moment from "moment";
import useFetchCridets from "../hooks/useFetchCridets";
import "../App.css";
import useFetch from "../hooks/useFetch";
import CarouselCards from "../Components/CarouselCards";
export default function Details() {
  const { id, explore } = useParams();
  const { data } = useFetchDetails(`/${explore}/${id}`);
  const { data: credits } = useFetchCridets(`/${explore}/${id}/credits`);
  const { base_urlImage } = useSelector((state: Istate) => state.base_urlImage);
  const { data: similar } = useFetch(`/${explore}/${id}/similar`);
  const { data: recommendations } = useFetch(
    `/${explore}/${id}/recommendations`
  );
  console.log(credits);
  const filterDirectors = credits?.crew?.filter(
    (person) => person.known_for_department === "Directing"
  );

  return (
    <div>
      <div className="w-full max-h-[380px] overflow-hidden relative hidden lg:block">
        <img
          src={base_urlImage + data?.backdrop_path}
          alt={data?.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-800 to-transparent"></div>
      </div>
      <div className="container flex flex-col items-center justify-center gap-8 mx-auto lg:items-start lg:justify-start p-t-20 lg:flex-row lg:pt-0 ">
        <div className="relative z-10 lg:-mt-32 lg:pt-0 rounded-xl w-60">
          <img
            src={base_urlImage + data?.poster_path}
            alt={data?.title}
            className="shadow-sm rounded-xl"
          />
        </div>
        <div className="w-full my-2">
          <h1 className="text-4xl font-bold">{data?.title}</h1>
          <p className="text-sm text-neutral-500">{data?.tagline}</p>
          <Diveder />
          <div className="flex items-center gap-2">
            <h2 className="text-lg">
              Rating : {data?.vote_average?.toFixed(1)}+ |
            </h2>

            <h2 className="text-lg"> Votes : {data?.vote_count} |</h2>

            <h2 className="text-lg"> Duration : {data?.runtime} m </h2>
          </div>
          <Diveder />

          <h2 className="text-xl font-bold">Overview</h2>
          <p>{data?.overview}</p>
          <Diveder />
          <h2 className="text-xl font-bold">
            Release Date :{" "}
            <span className="text-neutral-500">
              {moment(data?.release_date).format("MMMM Do YYYY")}
            </span>
          </h2>
          <Diveder />
          <h2 className="text-xl font-bold">
            Genres :
            <span className="text-neutral-500">
              {data?.genres
                ?.map((item) => {
                  return item?.name;
                })
                ?.join(", ")}
            </span>
          </h2>

          <Diveder />
          <h2 className="text-xl font-bold">
            Production Companies :{" "}
            {
              <span className="text-neutral-500">
                {data?.production_companies
                  ?.map((item) => {
                    return item.name;
                  })
                  .join(", ")}
              </span>
            }
          </h2>

          <Diveder />

          <h2 className="text-xl font-bold">
            Directed By :{" "}
            {filterDirectors && filterDirectors.length > 0 ? (
              <span className="text-neutral-500">
                {filterDirectors[0].name}
              </span>
            ) : (
              <span className="text-neutral-500">No director found</span>
            )}
          </h2>
          <Diveder />

          <h2 className="text-xl font-bold">
            Cast :{" "}
            <div className="flex flex-wrap items-center gap-4 gap-y-6 justify-stretch">
              {credits?.cast
                ?.filter((item) => item?.profile_path !== null)
                .map((item) => {
                  return (
                    <div key={item?.id} className="tooltip">
                      <div className="w-16 h-16 overflow-hidden  rounded-[50%] ">
                        <img
                          src={base_urlImage + item?.profile_path}
                          alt=""
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-sm text-ellipsis">
                        {item?.name.slice(0, 10)}
                      </p>
                      <span className="tooltiptext">{item?.name}</span>
                    </div>
                  );
                })}
            </div>
          </h2>
        </div>
      </div>

      <Diveder />
      <CarouselCards
        data={similar}
        heading={`Similar ${explore}`}
        media_type={`${explore}`}
      />
      <CarouselCards
        data={recommendations}
        heading={"Recommendation"}
        media_type={`${explore}`}
      />
    </div>
  );
}
