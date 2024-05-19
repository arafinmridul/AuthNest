import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar bg-primary navbar-expand-lg">
            <div className="container-fluid">
                <a
                    className="navbar-brand fw-bold text-light"
                    href="/dashboard"
                >
                    AuthNest
                </a>
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
                            <a
                                className="nav-link fw-bold text-light"
                                href="/dashboard"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link fw-bold text-light"
                                href="/register"
                            >
                                Register
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link fw-bold text-light"
                                href="/login"
                            >
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
