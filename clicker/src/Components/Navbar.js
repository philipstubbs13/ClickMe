import React from "react";
// import ScoreCounter from "./ScoreCounter";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-default navbar-fixed-top">
        <div className="container">
            <h1 className="text-white">ClickMe</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <h3 className="game-message text-white">{props.Message}</h3>
        </div>
    </nav>
);

export default Navbar;
