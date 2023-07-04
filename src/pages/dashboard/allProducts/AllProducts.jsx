import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useProducts from '../../../hooks/useProducts';
import './AllProducts.scss';

const AllProducts = () => {
  const [products, refetch] = useProducts();
  console.log(products);

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
        fetch(`https://brmmm-server.vercel.app/products/${product?._id}`, {
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

  return (
    <section>
      <h2>All Products</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={product?._id}>
              <th>
                <h5>{index + 1}</h5>
              </th>
              <td>
                <h5>{product?.productsTitle}</h5>
              </td>
              <td className='centered'>$ {product?.price}</td>
              <td className='centered'>{product?.rating}</td>
              <td className='centered'>{product?.quantity}</td>
              <td>
                <div id="btn-group">
                  <button id="btn-edit">
                    <FaEdit size={16} />
                  </button>
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

export default AllProducts;
