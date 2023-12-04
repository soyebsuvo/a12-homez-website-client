import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure'
export default function useRequestedProperty() {    
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data : requestedProperties = [] , isPending , refetch} = useQuery({
        queryKey : ['requestedProperties'],
        queryFn : async () => {
            const res = await axiosSecure.get(`/requestedProperties?email=${user?.email}`)
            return res.data;
        }
    })
  return [requestedProperties , isPending , refetch]
}
