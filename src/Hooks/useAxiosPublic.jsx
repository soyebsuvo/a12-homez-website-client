import axios from "axios"

const axiosPublic = axios.create({
    baseURL : 'https://a-12-homez-server.vercel.app'
})
export default function useAxiosPublic() {
  return axiosPublic;
}
