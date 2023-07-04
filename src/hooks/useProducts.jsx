import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const {data: products= [], refetch}= useQuery({
    queryKey: ['products'],
    queryFn: async()=>{
      const res = await fetch('https://brmmm-server.vercel.app/products')
      return res.json();
    }
  })

  return [products, refetch];
};

export default useProducts;
