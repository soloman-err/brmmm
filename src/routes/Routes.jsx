import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Cart from '../pages/Cart/Cart';
import BuyNow from '../pages/buyNow/BuyNow';
import Home from '../pages/home/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import ProductDetails from '../shared/productDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'product-details', element: <ProductDetails /> },
      { path: 'buy-now/payment', element: <BuyNow /> },
      { path: 'cart', element: <Cart /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
]);

export default router;
