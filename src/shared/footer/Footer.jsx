import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      {/* Row-01 */}
      <div id="row-01">
        <div>
          <h4>Shop</h4>
          <div className="links">
            <Link to={'/'} className="link">
              Home
            </Link>
            <Link to={'/'} className="link">
              Categories
            </Link>
            <Link to={'/'} className="link">
              Payment
            </Link>
          </div>
        </div>

        <div>
          <h4>Support</h4>
          <div className="links">
            <Link to={'/'} className="link">
              Forum
            </Link>
            <Link to={'/'} className="link">
              E-mail
            </Link>
            <Link to={'/'} className="link">
              Live Chat
            </Link>
          </div>
        </div>

        <div>
          <h4>Company</h4>
          <div className="links">
            <Link to={'/'} className="link">
              Customer Service
            </Link>
            <Link to={'/'} className="link">
              Privacy
            </Link>
            <Link to={'/'} className="link">
              Terms of Use
            </Link>
            <Link to={'/'} className="link">
              About
            </Link>
            <Link to={'/'} className="link">
              Affiliate
            </Link>
          </div>
        </div>

        <div id="contact-col">
          <h4>Contact</h4>

          <div>
            <div>
              <h5>Email</h5>
              <Link to={'/'} className="link">
                Contact Us
              </Link>
            </div>

            <div>
              <h5>Telephone</h5>
              <Link to={'/'} className="link">
                +910-202-111
              </Link>
            </div>

            <div>
              <h5>Address</h5>
              <p>
                1299 North Ave. <br />
                North Carolina, CA 09889
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row-02 */}
      <div id="row-02">
        <div>
          <h4>Store Locator</h4>
          <span>Find a brmmm garage near you</span>
          <div>
            <button>FIND A GARAGE</button>
          </div>
        </div>

        <div>
          <h4>Follow brmmm</h4>
          <div id="follow">
            <FaFacebookSquare size={20} />
            <FaTwitterSquare size={20} />
            <FaYoutubeSquare size={20} />
            <FaInstagramSquare size={20} />
            <FaPinterestSquare size={20} />
          </div>
        </div>

        <div>
          <h4>Subcribe</h4>
          <span>Receive product news and updates in your inbox</span>
          <input type="email" placeholder="Email Address" />
        </div>
      </div>

      <small id="copyright">&copy; brmmm 2023, All rights reserved.</small>
    </footer>
  );
};

export default Footer;
