import { useEffect, useState } from 'react';
import ProductCard from '../../../shared/productCard/productCard';
import './ShopItems.scss';

const ShopItems = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('http://localhost:2000/products')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, []);

  
  return (
    <div id="shop">
      {products &&
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  );
};

export default ShopItems;
