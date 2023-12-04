import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

export default function usePropertyBought() {
    const { user }  = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: properyBought, isPending , refetch} = useQuery({
        queryKey: ["propertyBought", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/offeredProperties?email=${user?.email}`);
            return res.data;
        }
    })
  return [properyBought , isPending , refetch]
}
