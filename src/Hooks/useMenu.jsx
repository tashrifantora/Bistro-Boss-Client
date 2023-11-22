import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const axiousPublic = useAxiosPublic();

    const { data: menu = [], refetch, isPending: loading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiousPublic.get('/menu');
            return res.data
        },

    })

    return [menu, refetch, loading]
}

export default useMenu;