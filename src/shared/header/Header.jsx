import { FaCartPlus, FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header id="header">
      <div>brmmm...</div>
      <ul className="">
        <li>Home</li>
        <li>New Arrivals</li>
        <li>Popular</li>
        <li>Blogs</li>
      </ul>
      <div id="icons">
        <FaSearch />
        <FaCartPlus />
      </div>
    </header>
  );
};

export default Header;
