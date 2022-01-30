import shopImg from '../../assets/gn-logo.jpg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container-fluid d-flex flex-row justify-content-between align-items-center ">
        <div className="">
          <img
            src={shopImg}
            width="40"
            height="40"
            className="rounded-circle"
            alt="logo"
          />
        </div>
        <div>
          <span className="mx-1">Copyrigth © 2022 Personal Project</span>
        </div>
        <div className=" justify-content-center">
          <ul className="navbar-nav ist-group list-group-horizontal">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link">
                <i className="fab fa-facebook-square fs-2 text-primary"></i>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link">
                <i className="fab fa-line fs-2 text-success"></i>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link">
                <i class="fab fa-google-plus fs-2 text-danger"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
