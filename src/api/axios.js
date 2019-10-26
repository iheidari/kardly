import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response && error.response.data)
      return Promise.reject(error.response.data);
    return Promise.reject(error);
  },
);

export default instance;
