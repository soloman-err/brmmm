import { Link, Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAdmin from '../../hooks/useAdmin';
import useAuth from '../../hooks/useAuth';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';
import './DashboardLayout.scss';

const DashboardLayout = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: `Want to logout?`,
      //   text: "You won't be able to revert this product!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d4',
      cancelButtonColor: '#d33e',
      confirmButtonText: 'Logout',
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        navigate('/login');
      }
    });
  };

  return (
    <div id="dashboard">
      <Header />
      <section id="dashboard-layout">
        <aside>
          {user && (
            <ul>
              <li>
                <Link to={'/dashboard/profile'}>Profile</Link>
              </li>
              <li>
                <Link to={'/dashboard/all-users'}>All users</Link>
              </li>
              <li>
                <Link to={'/dashboard/all-products'}>All products</Link>
              </li>
              <li>
                <Link to={'/dashboard/all-products'}>Add a product</Link>
              </li>
              <li>
                <Link to={'/dashboard/settings'}>Settings</Link>
              </li>
              {user ? (
                <li>
                  <button onClick={() => handleLogout()}>Logout</button>
                </li>
              ) : (
                <>
                  <li>Login</li>
                  <li>Register</li>
                </>
              )}
            </ul>
          )}

          {/* <hr /> */}

          {/* Default */}
          <ul>
            <li>Home</li>
            <li>Category</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
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
