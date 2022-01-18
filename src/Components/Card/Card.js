import React, { Component } from "react";

import Image from "../UIComponents/Image/Image";

import styles from "./Card.module.css";

class Card extends Component {
    render () {
        return (
            <div className={styles.Card} >
                <Image imagePath={this.props.path} alt={this.props.alt} />
                <p> Apollo Running Short </p>
                <h5>$50.00</h5>
            </div>
        )
    }
}

export default Card;