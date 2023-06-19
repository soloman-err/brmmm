import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import Header from '../shared/header/Header';

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
