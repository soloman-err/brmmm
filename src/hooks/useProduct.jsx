import { useQuery } from "@tanstack/react-query";

const useProduct = (productId)=>{
    const {data: product ={}}= useQuery({
        queryKey: ['product'],
        queryFn: async ()=>{
            const res = await fetch(`https://brmmm-server.vercel.app/products/${productId}`)
            return res.json();
        }
    })
    return {product};
}
export default useProduct;


// const {data: products= []}= useQuery({
//     queryKey: ['products'],
//     queryFn: async()=>{
//       const res = await fetch('https://brmmm-server.vercel.app/products')
//       return res.json();
//     }
//   })