import shopImg from '../../assets/gn-logo.jpg';
import { Link } from 'react-router-dom';
import styles from '../../styles/Header.module.css';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

function Header() {
    const [pages, setPages] = useState('homepage');
    const { user, logout } = useContext(AuthContext);
    const { cart } = useContext(CartContext);

    return (
        <header className="">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-md">
                    <>
                        <Link className="navbar-brand d-flex" to="/">
                            <img
                                src={shopImg}
                                alt=""
                                width="44"
                                height="44"
                                className="d-inline-block align-text-top rounded-circle me-2"
                            />
                            <span className="d-flex align-items-center fw-bold">
                                GN Shop
                            </span>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo03"
                            aria-controls="navbarTogglerDemo03"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </>
                    <div
                        className="collapse navbar-collapse "
                        id="navbarTogglerDemo03"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link
                                    className={
                                        'nav-link ' +
                                        (pages === 'homepage' ? 'active' : null)
                                    }
                                    aria-current="page"
                                    to="/"
                                    onClick={(e) => setPages('homepage')}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={
                                        'nav-link ' +
                                        (pages === 'product' ? 'active' : null)
                                    }
                                    aria-current="page"
                                    to="/categories"
                                    onClick={(e) => setPages('product')}
                                >
                                    Product
                                </Link>
                            </li>
                        </ul>
                        {user ? (
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                {user && user.role === 'CUSTOMER' && (
                                    <li className="nav-item ms-2">
                                        <Link
                                            className={
                                                'nav-link align-items-center' +
                                                (pages === 'cart'
                                                    ? 'active'
                                                    : null)
                                            }
                                            aria-current="page"
                                            to="user/cart"
                                            onClick={(e) => setPages('cart')}
                                        >
                                            <i class="fas fa-shopping-cart"></i>
                                            &nbsp;
                                            <span className="me-2">Cart</span>
                                            {cart && cart.length !== 0 && (
                                                <span
                                                    className="position-absolute top-1 start-95 translate-middle badge round-pill bg-danger"
                                                    role="button"
                                                >
                                                    {cart.length}
                                                </span>
                                            )}
                                        </Link>
                                    </li>
                                )}
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle"
                                        to="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="fas fa-user-circle" />{' '}
                                        &nbsp;
                                        {user ? user.username : 'username'}
                                    </Link>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        {user && user.role === 'CUSTOMER' && (
                                            <>
                                                <li>
                                                    <Link
                                                        className="dropdown-item"
                                                        to="/myuser/"
                                                    >
                                                        My Profile
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item"
                                                        to="/user/history"
                                                    >
                                                        Order History
                                                    </Link>
                                                </li>
                                            </>
                                        )}
                                        {user && user.role === 'ADMIN' && (
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to="/admin/dashboard"
                                                >
                                                    Admin Dashboard
                                                </Link>
                                            </li>
                                        )}
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="#"
                                                role="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    logout();
                                                }}
                                            >
                                                <i className="fas fa-sign-out-alt">
                                                    &nbsp;Log out
                                                </i>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item m-0 p-0">
                                    <Link
                                        className={
                                            'nav-link ' +
                                            (pages === 'login'
                                                ? 'active'
                                                : null)
                                        }
                                        to="/login"
                                        onClick={(e) => setPages('login')}
                                    >
                                        <i class="fas fa-user">&nbsp; Login</i>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={
                                            'nav-link ' +
                                            (pages === 'register'
                                                ? 'active'
                                                : null)
                                        }
                                        to="/register"
                                        onClick={(e) => setPages('register')}
                                    >
                                        <i className="fas fa-id-card">
                                            &nbsp; Register
                                        </i>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
