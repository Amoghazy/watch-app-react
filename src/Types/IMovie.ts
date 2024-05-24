interface IMovie {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  title: string;
  name: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  tagline: string;
  revenue: number;
  runtime: number;
  genres: { id: number; name: string }[];
  production_companies: { id: number; name: string }[];
}
export default IMovie;
