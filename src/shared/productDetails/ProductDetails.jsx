// import { Helmet } from "react-helmet";
import './ProductDetails.css';

import { Link } from 'react-router-dom';
import ProductCard from '../productCard/productCard';

const ProductDetails = () => {
  return (
    <div id="product-details-root">
      {/* <Helmet><title>Product Details | brmmm</title></Helmet> */}
      <section id="product-details-section">
        <div>
          <img src="https://dummyimage.com/600x400/000/111" alt="item-card" />
        </div>

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
            <Link to={'/cart'}>
              <button style={{ backgroundColor: 'orange' }}>Add To Cart</button>
            </Link>
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
