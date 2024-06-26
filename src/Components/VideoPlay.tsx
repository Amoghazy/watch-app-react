/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";

export default function VideoPlay({
  videoID,
  close,
  media_type,
}: {
  videoID: number;
  close: () => void;
  media_type?: string;
}) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    try {
      (async () => {
        const res = await axios.get(`/${media_type}/${videoID}/videos`);
        console.log(res?.data?.results);
        setData(res?.data?.results);
      })();
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <section className="fixed z-[100] top-0 flex items-center justify-center w-full h-full bg-neutral-500/50">
      <div className=" relative bg-black rounded-lg shadow-lg lg:min-h-[80vh] min-h-[40vh] md:max-w-screen-sm sm:max-w-sm max-w-96 lg:max-w-screen-lg aspect-video">
        <button
          onClick={close}
          className="absolute cursor-pointer -top-7 right-3"
        >
          <IoClose className="text-2xl text-white" />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${data[0]?.key}`}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
