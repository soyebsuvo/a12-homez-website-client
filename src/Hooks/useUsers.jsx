import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

export default function useUsers() {
    const axiosSecure = useAxiosSecure();
    const { data : users , isPending : isUsersPending , refetch} = useQuery({
        queryKey : ["users"],
        queryFn : async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })
  return [users , isUsersPending , refetch]
}
