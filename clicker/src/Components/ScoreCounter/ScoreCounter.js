import React from "react";
// import "./Container.css";

const ScoreCounter = props => [
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 className="scoreboard">Score: {props.count} Top Score: 0</h2>
            </div>
        </div>
    </div>
]

export default ScoreCounter;
