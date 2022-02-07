import shopImg from '../../assets/gn-logo.jpg';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu';

function Header() {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          <img
            src={shopImg}
            alt=""
            width="44"
            height="44"
            className="d-inline-block align-text-top rounded-circle me-2"
          />
          GN Shop
        </Link>
        <ul>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/categories">Product</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contact Us</Link>
          </li>
          <li>
            <Link to="/login">
              <i class="fas fa-user "></i> Log in
            </Link>
          </li>
          {/* <li>
            <Link to="#"><i class="fas fa-sign-out-alt"></i> Log out</Link>
          </li> */}
        </ul>
      </header>
      <MainMenu />
    </>
  );
}

export default Header;
