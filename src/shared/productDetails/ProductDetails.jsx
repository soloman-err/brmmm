// import { Helmet } from "react-helmet";
import './ProductDetails.scss';

import { Toaster, toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ProductCard from '../productCard/productCard';

const ProductDetails = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login');
    } else {
      toast.success('Added to cart', {
        style: {
          borderRadius: '2px',
        },
      });
    }
  };

  return (
    <div id="product-details-root">
      {/* <Helmet><title>Product Details | brmmm</title></Helmet> */}
      <section id="product-details-section">
        <img src="https://dummyimage.com/600x500/000/111" alt="item-card" />

        <div id="product-info">
          <div>
            <h3>Lorem ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              facere assumenda ullam itaque repellendus modi et, odio maiores
              amet nisi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              quis.
            </p>
          </div>

          <div>
            <div></div>
            <div></div>
          </div>

          <div id="btn-container">
            <Link to={'/buy-now/payment'}>
              <button style={{ backgroundColor: 'red' }}>Buy Now</button>
            </Link>
            <Link>
              <button
                onClick={handleAddToCart}
                style={{ backgroundColor: 'orange' }}
              >
                Add To Cart
              </button>
            </Link>
            <Toaster position="top-right" reverseOrder={false} />
          </div>
        </div>
      </section>
      <section id="suggested-section">
        <h4>You might also like</h4>
        <div id="product-card-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
