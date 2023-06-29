import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import DashboardLayout from '../layouts/dashboardLayout/DashboardLayout';
import Blogs from '../pages/blogs/Blogs';
import BuyNow from '../pages/buyNow/BuyNow';
import Cart from '../pages/dashboard/cart/Cart';
import MyProfile from '../pages/dashboard/myProfile/MyProfile';
import Payment from '../pages/dashboard/payment/Payment';
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
      { path: 'profile', element: <MyProfile /> },
      { path: 'cart', element: <Cart /> },
      { path: 'payment', element: <Payment /> },
    ],
  },
]);

export default router;
