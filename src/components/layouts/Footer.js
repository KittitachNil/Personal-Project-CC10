import shopImg from '../../assets/gn-logo.jpg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <img
                src={shopImg}
                width="40"
                height="40"
                className="rounded-circle"
                alt="logo"
            />
            <span>Copyrigth © 2022 Personal Project</span>
            <ul>
                <li>
                    <Link to="/">
                        <i className="fab fa-facebook-square fs-1 text-primary"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <i className="fab fa-line fs-1 text-success"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <i className="fab fa-google-plus fs-1 text-danger"></i>
                    </Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
