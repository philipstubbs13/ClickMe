import React from "react";
// import ScoreCounter from "./ScoreCounter";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
            <h1 className="text-white">ClickMe</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <h2 className="scoreboard text-white">Score: {props.count} Top Score: 0</h2>
        </div>
    </nav>
);

export default Navbar;
