import axios from '../config/axios';

interface Gender {
  id: number;
  name: string;
}

export const getMovies = async (type: string, page?: number): Promise<any> => {
  return axios
    .get(`/movie/${type}`, {
      params: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        api_key: process.env.REACT_APP_MOVIEDB_KEY,
        language: 'pt-BR',
        page: page || 1,
      },
    })
    .then(result => result.data);
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
