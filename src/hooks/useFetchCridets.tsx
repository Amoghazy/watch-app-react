import axios from "axios";
import { useEffect, useState } from "react";
import credits from "../Types/credits";

const useFetchCridets = (url: string) => {
  const [data, setData] = useState({} as credits);
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
export default useFetchCridets;
