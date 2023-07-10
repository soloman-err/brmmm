import { FaTrashAlt } from 'react-icons/fa';
import { TbRefresh } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';
import './Cart.scss';

const Cart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);

  //  reduce:
  const total = cart.reduce(
    (sum, product) => parseFloat(product?.price) + sum,
    0
  );
  const totalPrice = total?.toFixed(2);

  // Delete a product:
  const handleDelete = (product) => {
    console.log(product);

    Swal.fire({
      title: `Delete- ${product?.name} ?`,
      //   text: "You won't be able to revert this product!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d4',
      cancelButtonColor: '#d33e',
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brmmm-server.vercel.app/carts/${product?._id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire('', 'Product has been deleted!', 'success');
            }
          });
      }
    });
  };

  // Clear Cart:
  const handleClearCart = () => {
    Swal.fire({
      title: `Want to Clear Cart?`,
      //   text: "You won't be able to revert this product!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d4',
      cancelButtonColor: '#d33e',
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brmmm-server.vercel.app/carts`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire('', 'Cart has been cleared!', 'success');
            }
          });
      }
    });
  };

  return (
    <section>
      <div id="cart-header">
        {/* <h3>Total Amount: ${totalPrice}</h3> */}
        <h2>Shopping Cart</h2>
        <div id="pay-btn-group">
          {cart.length > 0 ? (
            <button onClick={handleClearCart} id="clear-cart">
              Clear cart <TbRefresh size={18} />
            </button>
          ) : (
            <button onClick={handleClearCart} id="clear-cart" disabled>
              Cart is empty <FaTrashAlt />
            </button>
          )}
          {/* 
          {cart.length > 0 && (
            <Link to={'/dashboard/payment'}>
              <button id="proceed-payment">Proceed Checkout</button>
            </Link>
          )} */}
        </div>
      </div>


      <div id='cart-body'>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            {/* <th>Quantity</th> */}
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((product) => (
            <tr key={product?._id}>
              <td>
                <div id="product-container">
                  <img src={product?.image} alt="product-image" />
                  <h5>{product?.productsTitle}</h5>
                </div>
              </td>
              <td>$ {product?.price}</td>
              {/* <td>{product?.quantity}</td> */}
              <td>
                <div id="btn-group">
                  {/* <button id="btn-edit">
                    <FaEdit size={20} />
                  </button> */}
                  <button id="btn-del" onClick={() => handleDelete(product)}>
                    <FaTrashAlt size={15} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div id="cart-summary">
        <div id="cart-summary-items">
          <p className='item'>
            <span>{cart?.length} items</span>
            <span>${totalPrice}</span>
          </p>

          <p className='item'>
            <span>Shipping</span>
            <span>Free</span>
          </p>
        </div>

        <div id="cart-summary-total">
          <h2 className='item'>
            <span>Total(tax incl.)</span> 
            <span>${totalPrice}</span>
          </h2>
        </div>

        <div id="cart-checkout">
          {cart.length > 0 && (
            <Link to={'/dashboard/payment'}>
              <button id="proceed-payment">Proceed Checkout</button>
            </Link>
          )} 
        </div>
      </div>
      </div>
    </section>
  );
};

export default Cart;
