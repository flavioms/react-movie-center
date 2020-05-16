import axios from '../config/axios';

interface MovieBasic {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genre_ids: number[];
  overview: string;
}

interface Gender {
  id: number;
  name: string;
}

export const getPopularMovies = async (): Promise<MovieBasic[]> => {
  return axios
    .get('/movie/popular', {
      params: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        api_key: '9c5084be8cde346ac6691f09c3d6fa84',
        language: 'pt-BR',
        page: 1,
      },
    })
    .then(result => result.data.results);
};

export const getGender = async (): Promise<Gender[]> => {
  const genders: Gender[] = await axios
    .get('/genre/movie/list', {
      params: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        api_key: '9c5084be8cde346ac6691f09c3d6fa84',
        language: 'pt-BR',
      },
    })
    .then(result => result.data.genres);

  return genders;
};
