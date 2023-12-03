import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider/AuthProvider"
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function useCheckRole() {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { data: role } = useQuery({
        queryKey: ["role"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user/admin/${user?.email}`);
            return res.data.role;
        }
    })
    return [role]
}
