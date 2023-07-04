import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div id="item-card">
      <LazyLoad width={'100%'} height={300} offset={20} threshold={0.5}>
        <img src={product?.photoURL} alt="product-card-image" />
      </LazyLoad>

      <Link to={`product-details/${product?._id}`}>
        <button>
          {product?.productsTitle} <br />
          <span id='prod-price'>${product?.price}</span>
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
