import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isUserLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`)
            console.log(res.data)
            return res.data?.admin
        }
    })
    return [isAdmin, isUserLoading]
};

export default useAdmin;