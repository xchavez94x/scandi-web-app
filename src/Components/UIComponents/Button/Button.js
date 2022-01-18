import React, { Component } from "react";

import styles from "./Button.module.css";

class Button extends Component {
    
    render () {
        let classes;
        switch (this.props.buttonType) {
            case "regular":
                classes = styles.RegularButton;
                break;

            case "squareButton":
                classes = styles.SquareButton;
                break;

            case "cartButton":
                classes = styles.CartButton;
                break;

            case "anotherRegularButton":
                classes = styles.AnotherRegular;
                break;
                
            default:
                classes = styles.RegularButton;
                break;
        }
        return (
            <button className={classes} onClick={this.props.clicked}> {this.props.label} </button> 
        )
    }
}

export default Button