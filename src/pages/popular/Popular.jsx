import useProducts from '../../hooks/useProducts';
import ProductCard from '../../shared/productCard/ProductCard';
import './Popular.scss';

const Popular = () => {
  const [products] = useProducts();
  console.log(products);

  return (
    <section>
      <h2>Popular Cars</h2>
      <div id="shop">
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default Popular;
