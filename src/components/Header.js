import React, { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Marvel's Heros Clicky Game</h1>
                <p>Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        )
    }
}
export default Header;