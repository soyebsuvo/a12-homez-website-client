import { useQuery } from "@tanstack/react-query"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

export default function useAllProperties() {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data : allProperties = [] , isPending : isAllPropertiesPending , refetch} = useQuery({
        queryKey : ['allproperties'],
        queryFn : async () => {
            const res = await axiosSecure.get(`/properties?email=${user?.email}`);
            return res.data;
        }
    })
  return [ allProperties , isAllPropertiesPending  , refetch]
}
