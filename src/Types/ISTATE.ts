import IMovie from "./IMovie";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Istate {
  dataBanner: {
    bannerData: IMovie[];
  };
  base_urlImage: {
    base_urlImage: string;
  };
}

export default Istate;
