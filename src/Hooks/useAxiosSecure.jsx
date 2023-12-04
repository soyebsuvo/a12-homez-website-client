import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000'
})

export default function useAxiosSecure() {
  axiosSecure.interceptors.request.use( (config) => {
    const token = localStorage.getItem('token');
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  return axiosSecure;
}
