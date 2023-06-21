import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  // const { name, image, price, desc } = product;

  return (
    <div id="item-card">
      <img src="https://dummyimage.com/600x500/000/111" alt="item-card" />

      {/* <img src={image} alt="item-card" /> */}

      <Link to={'/product-details'}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
