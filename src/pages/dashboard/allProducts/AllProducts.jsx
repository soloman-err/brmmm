import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useProducts from '../../../hooks/useProducts';

const AllProducts = () => {
    const [products] = useProducts();

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

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Car</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={product?._id}>
              <th>{index + 1}</th>
              <td>
                <div>
                  <img src={product?.image} alt="product-image" />
                </div>
              </td>
              <td>
                <h3>{product?.name}</h3>
              </td>
              <td>$ {product?.price}</td>
              <td>
                <div id="btn-group">
                  {/* <button id="btn-edit">
                    <FaEdit size={20} />
                  </button> */}
                  <button id="btn-del" onClick={() => handleDelete(product)}>
                    <FaTrash size={20} />
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
