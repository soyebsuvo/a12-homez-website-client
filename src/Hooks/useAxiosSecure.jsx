import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
  baseURL: 'https://a-12-homez-server.vercel.app'
})

export default function useAxiosSecure() {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  axiosSecure.interceptors.request.use( (config) => {
    const token = localStorage.getItem('token');
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  axiosSecure.interceptors.response.use(function (response) {
    return response;
}, async (error) => {
    const status = error.response.status;
    if (status === 401 || status === 403) {
        await logOut();
        navigate('/login');
    }
    return Promise.reject(error);
})

  return axiosSecure;
}
