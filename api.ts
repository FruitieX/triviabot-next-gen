import axios from 'axios';

const jservice = axios.create({
  baseURL: 'http://jservice.io/api',
});

export const getQuestion = async (count = 6) => {
  const result = await jservice.get('/random', {
    params: {
      count,
    },
  });

  return result.data;
};