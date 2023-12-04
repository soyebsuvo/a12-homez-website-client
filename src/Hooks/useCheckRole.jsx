import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider/AuthProvider"
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export default function useCheckRole() {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: role , isPending : isRolePending } = useQuery({
        queryKey: ["role"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`);
            return res.data.role;
        }
    })
    return [role , isRolePending]
}
