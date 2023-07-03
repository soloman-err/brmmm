import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div id="item-card">
      <LazyLoad width={'100%'} height={300} offset={20} threshold={0.50}>
        <img
          src="https://dummyimage.com/600x500/000/111"
          alt="product-card-image"
        />
      </LazyLoad>

      <Link to={`product-details/${product?._id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
