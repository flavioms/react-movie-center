export default interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genre_ids: number[];
  genreNames?: string[];
  overview: string;
}
