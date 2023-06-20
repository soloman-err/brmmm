import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = () => {
  return (
    <div id="item-card">
      <img src="/dummy-img.png" alt="item-card" />

      <Link to={'/product-details'}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
