// import { Helmet } from "react-helmet";
import './ProductDetails.scss';

import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import ProductCard from '../productCard/ProductCard';

const ProductDetails = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const params = useParams()
  const id = params.id.toString()
  const [product, setProduct]= useState(null)
  console.log(product);

 useEffect(()=>{
  const fetchedProduct = async () => {
    try{
      const res = await fetch(`http://localhost:2000/products/${id}`)
      const data = await res.json();
      setProduct(data)
    }catch(error){
      console.log(error);
    }
  }
  fetchedProduct();
 },[id])

  const handleAddToCart = (item) => {
    console.log(item);
    if(user && user.email){
      const orderedItem = {
        menuItemId: product?._id,
        name: product?.name,
        image: product?.image,
        price: product?.price,
        email: user.email,
      }
      fetch('http://localhost:2000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orderedItem),
      })
      .then((res)=>res.json())
      .then((data)=>{
        if(data.insertedId){
          console.log(data);
          toast.success(`${product?.name} - Added to cart!`)
        }
      })
    } else{
      console.log('please login to order!');
      Swal.fire({
        title: "Please login to order the food!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
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
            <h3>{product?.name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              facere assumenda ullam itaque repellendus modi et, odio maiores
              amet nisi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              quis.
            </p>

            <h3>$: {product?.price}</h3>
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
