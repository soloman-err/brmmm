import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import Header from '../shared/header/Header';
import './RootLayout.css';

const RootLayout = () => {
  return (
    <div id="main" className="">
      <Header />
      <Outlet />
      <div id="root-footer">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
