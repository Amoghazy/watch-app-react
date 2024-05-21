import { BiSearch, BiSolidMoviePlay } from "react-icons/bi";
import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";

export const navigation = [
  {
    title: "TV Show",
    ref: "tv",
    icon: <PiTelevisionFill />,
  },
  {
    title: "Movies",
    ref: "movie",
    icon: <BiSolidMoviePlay />,
  },
];

export const mobileNavigation = [
  { title: "Home", ref: "", icon: <MdHomeFilled /> },
  ...navigation,
  { title: "Search", ref: "search", icon: <BiSearch /> },
];
