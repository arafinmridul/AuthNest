import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar bg-primary navbar-expand-lg">
            <div className="container-fluid">
                <Link
                    className="navbar-brand fw-bold text-light"
                    to="/dashboard"
                >
                    AuthNest
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link fw-bold text-light"
                                to="/dashboard"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link fw-bold text-light"
                                to="/register"
                            >
                                Register
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link fw-bold text-light"
                                to="/login"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
