import { BiChevronDown } from 'react-icons/bi';
import { FaBars, FaCartPlus, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <span id="menu-bar">
        <FaBars size={22} />
      </span>

      <div id="left">
        <div id="lang">
          <img src="/en.png" alt="lang-icon" />
        </div>
        <BiChevronDown />
        <div id="currency">
          <span>USD</span> <BiChevronDown size={20} />
        </div>

        <nav>
          <Link to={''}>Home</Link>
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
        <div id="search">
          <input type="search" />
          <FaSearch size={18} />
        </div>
        <FaCartPlus size={20} />
        {/* <FaUser size={20} /> */}
      </div>
    </header>
  );
};

export default Header;
