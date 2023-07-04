import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import './AddProduct.scss';

const AddProduct = () => {
  const { user } = useAuth();

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const photoURL = form.photoURL.value;
    const productsTitle = form.productsTitle.value;
    const price = form.price.value;
    const name = form.name.value;
    const email = form.email.value;
    const rating = form.rating.value;
    const subCategory = form.subCategory.value;
    const quantity = form.quantity.value;
    const desc = form.desc.value;

    const newProduct = {
      photoURL,
      productsTitle,
      price,
      name,
      email,
      rating,
      subCategory,
      quantity,
      desc,
    };

    fetch('https://brmmm-server.vercel.app/addProduct', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
        }
      });
    Swal.fire('Added successfully!', 'New Product Added!', 'success');
  };

  return (
    <form onSubmit={handleAddProduct}>
      <h1>Add New Product</h1>
      <div>
        {/* Row 1 */}
        <div id="row-one">
          {/* Picture URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="photoURL"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Products Title</span>
            </label>
            <input
              type="text"
              name="productsTitle"
              placeholder="Products Title"
              required
            />
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" placeholder="$ 00.00" required />
          </div>
        </div>

        {/* Row 2 */}
        <div id="row-two">
          {/* Seller name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Seller name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Seller email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" name="rating" placeholder="Rating" required />
          </div>
        </div>
      </div>
      {/* Row 3 */}
      <div id="row-three">
        {/* Sub-category */}
        <div className="form-control md:w-[48%]">
          <label className="label">
            <span className="label-text">Sub-category</span>
          </label>
          <select
            name="subCategory"
            id="subCategory"
            required
          >
            <option value="">Select an option</option>
            <option value="fordMustang">Ford Mustang</option>
            <option value="mercuryCougar">Mercury Cougar</option>
            <option value="pontiacGTO">Pontiac GTO</option>
            <option value="superCars">Super Cars</option>
            <option value="hotHatches">Hot Hatches</option>
            <option value="exotic">Exotic</option>
            <option value="off-RoadTrucks">Off-Road Trucks</option>
            <option value="suv-BasedTrucks">SUV-Based Trucks</option>
            <option value="compactTrucks">Compact Trucks</option>
            <option value="teslaModelX">Tesla Model X</option>
            <option value="crossovers">Crossovers</option>
            <option value="microCars">Micro Cars</option>
          </select>
        </div>

        {/* Quantity */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available quantity</span>
          </label>
          <input
            type="number"
            name="quantity"
            placeholder="Available quantity"
            className="input input-bordered"
            required
          />
        </div>
      </div>
      {/* Row 4 */}
      <div id="row-four" className="form-control">
        <label className="label">
          <span className="label-text">Product Description</span>
        </label>
        <textarea
          type="text"
          name="desc"
          placeholder="Write Description"
          required
        ></textarea>
      </div>
      <div id='publish-btn' className="form-control mt-6">
        <button type="submit">Publish</button>
      </div>
    </form>
  );
};

export default AddProduct;
