import { useQuery } from "@tanstack/react-query";

const useProduct = (productId)=>{
    const {data: product ={}}= useQuery({
        queryKey: ['product'],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:2000/products/${productId}`)
            return res.json();
        }
    })
    return {product};
}
export default useProduct;


// const {data: products= []}= useQuery({
//     queryKey: ['products'],
//     queryFn: async()=>{
//       const res = await fetch('http://localhost:2000/products')
//       return res.json();
//     }
//   })