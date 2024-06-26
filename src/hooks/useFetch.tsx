import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setIsPending(true);
        const res = await axios.get(url);

        setData(res.data.results );
        setIsPending(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [url]);

  return { data, isPending };
};
export default useFetch;
