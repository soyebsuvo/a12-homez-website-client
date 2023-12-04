import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure";

export default function useUnverifiedProperties() {
    const axiosSecure = useAxiosSecure();
    const {data : unvefiedProperties = [] , isPending : isUnvefiedPropertiesPending , refetch} = useQuery({
        queryKey : ['UnverifiedProperties'],
        queryFn : async () => {
            const res = await axiosSecure.get(`/unverifiedProperties`);
            return res.data;
        }
    })
  return [ unvefiedProperties , isUnvefiedPropertiesPending  , refetch]
}
