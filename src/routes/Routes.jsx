import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import DashboardLayout from '../layouts/dashboardLayout/DashboardLayout';
import Blogs from '../pages/blogs/Blogs';
import BuyNow from '../pages/buyNow/BuyNow';
import AddProduct from '../pages/dashboard/addProduct/AddProduct';
import AllProducts from '../pages/dashboard/allProducts/AllProducts';
import AllUsers from '../pages/dashboard/allUsers/AllUsers';
import Cart from '../pages/dashboard/cart/Cart';
import Payment from '../pages/dashboard/payment/Payment';
import Profile from '../pages/dashboard/profile/Profile';
import Settings from '../pages/dashboard/settings/Settings';
import Home from '../pages/home/home/Home';
import Login from '../pages/login/Login';
import Popular from '../pages/popular/Popular';
import Register from '../pages/register/Register';
import ProductDetails from '../shared/productDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'popular', element: <Popular /> },
      { path: 'blogs', element: <Blogs /> },
      { path: 'product-details/:id', element: <ProductDetails /> },
      { path: 'buy-now/payment', element: <BuyNow /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      { path: 'profile', element: <Profile /> },
      { path: 'all-users', element: <AllUsers /> },
      { path: 'all-products', element: <AllProducts /> },
      { path: 'add-product', element: <AddProduct /> },
      { path: 'settings', element: <Settings /> },
      { path: 'cart', element: <Cart /> },
      { path: 'payment', element: <Payment /> },
    ],
  },
]);

export default router;
