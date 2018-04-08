import React from "react";

const Jumbotron = props => (

    <div className="jumbotron bg-light">
        <div className="container mt-3">
            <h2 className="scoreboard">Score: {props.count} Top Score: 0</h2>
        </div>
    </div>

);

export default Jumbotron;