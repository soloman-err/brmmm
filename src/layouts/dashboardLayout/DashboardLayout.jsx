import { Outlet } from 'react-router-dom';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';
import './DashboardLayout.scss';

const DashboardLayout = () => {
  return (
    <div id="dashboard">
      <Header />
      <section id='dashboard-layout'>
        <aside>
          dashboard
        </aside>
        <Outlet />
      </section>
      <div id="root-footer">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
