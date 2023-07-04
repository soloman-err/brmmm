import { FaTrash, FaTrashAlt } from 'react-icons/fa';
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
        fetch(`http://localhost:2000/carts/${product?._id}`, {
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
        fetch(`http://localhost:2000/carts`, {
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
      <div id="cart-pay">
        <h3>Total Amount: ${totalPrice}</h3>
        <div id="pay-btn-group">
          {cart.length > 0 ? (
            <button onClick={handleClearCart} id="clear-cart">
              Clear cart <FaTrashAlt />
            </button>
          ) : (
            <button onClick={handleClearCart} id="clear-cart" disabled>
              Cart is empty <FaTrashAlt />
            </button>
          )}
          
          {cart.length > 0 && (
            <Link to={'/dashboard/payment'}>
              <button id="proceed-payment">Proceed Checkout</button>
            </Link>
          )}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            {/* <th>Car</th> */}
            <th>Name</th>
            <th>Price</th>
            {/* <th>Quantity</th> */}
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((product, index) => (
            <tr key={product?._id}>
              <th>
                <h5>{index + 1}</h5>
              </th>
              {/* <td>
                <div>
                  <img src={product?.image} alt="product-image" />
                </div>
              </td> */}
              <td>
                <h5>{product?.productsTitle}</h5>
              </td>
              <td>$ {product?.price}</td>
              {/* <td>{product?.quantity}</td> */}
              <td>
                <div id="btn-group">
                  {/* <button id="btn-edit">
                    <FaEdit size={20} />
                  </button> */}
                  <button id="btn-del" onClick={() => handleDelete(product)}>
                    <FaTrash size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Cart;
