import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import AuthProvider from "../Providers/AuthProvider/AuthProvider";

export default function useMySoldProperties() {
    const { user } = useContext(AuthProvider)
    const axiosSecure = useAxiosSecure();
    const {data : mySoldProperties , isPending : isMySoldPropertiesPending} = useQuery({
        queryKey : ["mysoldProperties"],
        queryFn : async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`);
            return res.data;
        }
    })
  return [mySoldProperties , isMySoldPropertiesPending ]
}
