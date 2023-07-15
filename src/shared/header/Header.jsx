import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { FaBars, FaCartPlus, FaSearch, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import './Header.scss';

const Header = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);

  const handleLogOut = () => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You'll be logged out!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Log Out!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Logged Out',
            'Thank you for being with oldschool',
            'success'
          );
          logOut();
        }
      });
    } catch (error) {
      console.log(error?.message);
    }
    navigate('/');
  };

  // Navbar toggler:
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <span id="menu-bar">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={26} /> : <FaBars size={22} />}
        </button>
      </span>

      <div id="left">
        {/* Toggled Menu */}
        <div className={`toggled-menu ${isMenuOpen ? 'show-menu' : ''}`}>
          <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/popular'}>Popular</Link>
            <Link to={'/blogs'}>Blogs</Link>
            <Link onClick={handleLogOut}>Logout</Link>
            <Link to={'/dashboard/profile'}>Dashboard</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
          </nav>
        </div>

        {/* <div id="lang">
          <img src="/en.png" alt="lang-icon" />
        </div>
        <BiChevronDown />
        <div id="currency">
          <span>USD</span> <BiChevronDown size={20} />
        </div> */}

        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/popular'}>Popular</Link>
          <Link to={'/blogs'}>Blogs</Link>
        </nav>
      </div>

      <div id="center">
        <span id="brmmm-logo">
          <Link to={'/'}>brmmm</Link>
        </span>
      </div>

      <div id="right">
        {user && user ? (
          <div id="logged">
            <Link onClick={handleLogOut}>Logout</Link>
            <Toaster position="top-right" reverseOrder={false} />
            <Link to={'/dashboard/profile'}>Dashboard</Link>
          </div>
        ) : (
          <div id="user-auth">
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
          </div>
        )}
        {/* <div id="user-auth">
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Register</Link>
        </div> */}
        <div id="search">
          {/* <input type="search" /> */}
          <FaSearch size={18} />
        </div>

        <Link to={'/dashboard/cart'}>
          <div id="cart">
            <FaCartPlus size={20} />
            <sup id="cart-items"> {cart?.length}</sup>
          </div>
        </Link>
        {/* <FaUser size={20} /> */}
      </div>
    </header>
  );
};

export default Header;
