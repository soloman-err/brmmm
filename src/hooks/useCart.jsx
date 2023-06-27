import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const [axiosSecure]= useAxiosSecure();
    const {user, loading}= useAuth();

    const {data: cart = [], refetch}= useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async()=>{
            const res = await axiosSecure(`/carts?email=${user?.email}`);
            return res.data;
        }
    })

    return [cart, refetch];
};

export default useCart;