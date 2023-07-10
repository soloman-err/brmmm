import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProduct = (productId)=>{
    const [axiosSecure]= useAxiosSecure()
    const {
        data: product = {},
    } = useQuery({
        queryKey:['product'],
        queryFn: async () =>{
            const res = await axiosSecure(`products/${productId}`);
            return res.data;
        }
    })
    return [product]
}
export default useProduct;