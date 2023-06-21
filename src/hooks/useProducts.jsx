import { useContext, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useContext();

  useEffect(() => {
    fetch('http://localhost:2000/products')
      .then((res) => {
        console.log(res);
      })
      .then((error) => {
        console.log(error);
      });
  }, []);

  return <div></div>;
};

export default useProducts;
