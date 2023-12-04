import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

export default function useWishlist() {
    const { user }  = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: wishlist, isPending , refetch} = useQuery({
        queryKey: ["wishlist", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/wishlist?email=${user?.email}`);
            return res.data;
        }
    })
  return [wishlist , isPending , refetch]
}
