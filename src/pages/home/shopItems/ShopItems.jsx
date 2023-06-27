import useProducts from '../../../hooks/useProducts';
import ProductCard from '../../../shared/productCard/ProductCard';
import './ShopItems.scss';

const ShopItems = () => {
  const [products] = useProducts()
  
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

