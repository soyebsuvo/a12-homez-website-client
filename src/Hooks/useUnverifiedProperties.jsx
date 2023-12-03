import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

export default function useUnverifiedProperties() {
    const axiosPublic = useAxiosPublic();
    const {data : unvefiedProperties , isPending : isUnvefiedPropertiesPending , refetch} = useQuery({
        queryKey : ['UnverifiedProperties'],
        queryFn : async () => {
            const res = await axiosPublic.get(`/unverifiedProperties`);
            return res.data;
        }
    })
  return [ unvefiedProperties , isUnvefiedPropertiesPending  , refetch]
}
