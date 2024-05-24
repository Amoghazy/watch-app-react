import axios from "axios";
import { useEffect, useState } from "react";
import IMovie from "../Types/IMovie";

const useFetchDetails = (url: string) => {
  const [data, setData] = useState({} as IMovie);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setIsPending(true);
        const res = await axios.get(url);

        setData(res.data);
        setIsPending(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [url]);

  return { data, isPending };
};
export default useFetchDetails;
