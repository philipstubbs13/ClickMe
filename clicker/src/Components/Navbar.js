import React from "react";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
            <a className="navbar-brand text-white" href="#">ClickMe</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-white">Score 0: Top Score: 0</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
