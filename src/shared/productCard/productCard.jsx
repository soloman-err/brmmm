import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = () => {
  return (
    <div id="item-card">
      <img src="https://dummyimage.com/600x400/000/111" alt="item-card" />

      <Link to={'/product-details'}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
