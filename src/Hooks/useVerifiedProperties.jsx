import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export default function useVerifiedProperties() {
    const axiosSecure = useAxiosSecure();
    const { data: allVerifiedProperties = [], isPending : isAllVerifiedPropertiesPending , refetch} = useQuery({
        queryKey: ["allPropertiesPage"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/properties`);
            return res.data;
        }
    })

  return [ allVerifiedProperties , isAllVerifiedPropertiesPending , refetch]
}
