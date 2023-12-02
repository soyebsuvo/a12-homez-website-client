import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

export default function useWishlist() {
    const { user }  = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { data: wishlist, isPending , refetch} = useQuery({
        queryKey: ["wishlist", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/wishlist?email=${user?.email}`);
            return res.data;
        }
    })
  return [wishlist , isPending , refetch]
}
