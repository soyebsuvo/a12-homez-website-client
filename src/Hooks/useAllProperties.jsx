import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

export default function useAllProperties() {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const {data : allProperties , isPending , refetch} = useQuery({
        queryKey : ['allproperties'],
        queryFn : async () => {
            const res = await axiosPublic.get(`/properties?email=${user?.email}`);
            return res.data;
        }
    })
  return [ allProperties , isPending  , refetch]
}
