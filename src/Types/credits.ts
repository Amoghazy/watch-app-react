import Actor from "./Actor";
import Cast from "./Cast";

interface credits {
  id: number;
  cast: Actor[];
  crew: Cast[];
}
export default credits;
