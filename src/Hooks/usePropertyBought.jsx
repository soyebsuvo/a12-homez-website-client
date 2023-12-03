import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

export default function usePropertyBought() {
    const { user }  = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { data: properyBought, isPending , refetch} = useQuery({
        queryKey: ["propertyBought", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/offeredProperties?email=${user?.email}`);
            return res.data;
        }
    })
  return [properyBought , isPending , refetch]
}
