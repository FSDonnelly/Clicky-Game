import React from "react";
import "./HeroCard.css";

const Heros = props => (
    <div className="card" onClick={() => props.clickedImage(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
)

export default Heros;