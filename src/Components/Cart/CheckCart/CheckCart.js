import React, { Component } from "react";

import CartItem from "../CartItem/CartItem";

import styles from "./CheckCart.module.css";

class CheckCart extends Component {
    render () {
        return (
            <div className={styles.CheckCart} >
                <CartItem />
                <CartItem />
            </div>
        )
    }
}

export default CheckCart;