import shopImg from '../../assets/gn-logo.jpg';
import { Link } from 'react-router-dom';
import styles from '../../styles/Header.module.css';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useState } from 'react';

function Header() {
    const { user, logout } = useContext(AuthContext);
    return (
        <header className="">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-md">
                    <>
                        <Link className="navbar-brand d-flex" to="#">
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
                                    className="nav-link active tw-bold"
                                    aria-current="page"
                                    to="#"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    id="navbarDropdown1"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    // aria-expanded="false"
                                    data-bs-auto-close="outside"
                                >
                                    Product
                                </Link>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown1"
                                >
                                    <li className="dropend">
                                        <Link
                                            className="dropdown-item dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            to="#"
                                        >
                                            Component (DIY)
                                        </Link>
                                        <ul className="dropdown-menu shadow">
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to="#"
                                                >
                                                    CPU
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to="#"
                                                >
                                                    Ram
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to="#"
                                                >
                                                    Mainboard
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Monitors
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Gaming Gears
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link tw-bold" to="#">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link tw-bold" to="#">
                                    Contact
                                </Link>
                            </li>
                            {user ? (
                                <li class="nav-item dropdown">
                                    <Link
                                        class="nav-link dropdown-toggle"
                                        to="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {user ? user.username : 'username'}
                                    </Link>
                                    <ul
                                        class="dropdown-menu"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <Link class="dropdown-item" to="#">
                                                My Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="#">
                                                Order History
                                            </Link>
                                        </li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="#">
                                                <i class="fas fa-sign-out-alt">
                                                    &nbsp;Log out
                                                </i>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        <i class="fas fa-user">&nbsp; Login</i>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
