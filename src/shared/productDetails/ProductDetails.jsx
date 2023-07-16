// import { Helmet } from "react-helmet";
import './ProductDetails.scss';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import ProductCard from '../productCard/ProductCard';

const ProductDetails = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const params = useParams();
  const id = params.id.toString();
  const [product, setProduct] = useState(null);

  console.log(product?.subCategory);
  // const {productsTitle}= product;

  // refetch:
  const { refetch } = useQuery({
    queryKey: ['carts', user?.email],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem('access-token'),
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    const fetchedProduct = async () => {
      try {
        const res = await fetch(`https://brmmm-server.vercel.app/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedProduct();
  }, [id]);

  //  Add to cart:
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const orderedItem = {
        productId: product?._id,
        productsTitle: product?.productsTitle,
        image: product?.photoURL,
        price: product?.price,
        email: user?.email,
      };
      fetch('https://brmmm-server.vercel.app/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(orderedItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            console.log(data);
            refetch();
            toast.success(`${product?.productsTitle} - Added to cart!`);
          }
        });
    } else {
      console.log('please login to order!');
      Swal.fire({
        title: 'Please login to order!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    }
  };

  return (
    <div id="product-details-root">
      {/* <Helmet><title>Product Details | brmmm</title></Helmet> */}
      <section id="product-details-section">
        <div id='prod-img'>
        <img src={product?.photoURL} alt="item-card" />
        </div>

        <div id="product-info">
          <div id="prod-details">
            <h3 id="prod-title">{product?.productsTitle}</h3>
            <p id="prod-desc">{product?.desc}</p>

            <h3 id="prod-price">$ {product?.price}</h3>
          </div>

          <div id="cart-prod-quantity">
            <p>Quantity-</p>
            <input type="number" name="quantity" defaultValue={1}/>
          </div>


          <div id="btn-container">
            {/* <Link to={'/buy-now/payment'}>
              <button style={{ backgroundColor: 'red' }}>Buy Now</button>
            </Link> */}
            <button
              id="cart-btn"
              onClick={handleAddToCart}
              style={{ backgroundColor: 'orange' }}
            >
              Add To Cart
              <FaShoppingCart size={16} />
            </button>
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
