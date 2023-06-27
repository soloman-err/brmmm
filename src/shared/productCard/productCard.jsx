import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
    
  return (
    <div id="item-card">
    <img
      src="https://dummyimage.com/600x500/000/111"
      alt="product-card-image"
    />

    <Link to={`product-details/${product?._id}`}>
    <button>View Details</button></Link>
  </div>
  );
};

export default ProductCard;
