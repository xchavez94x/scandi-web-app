import React, { Component } from "react";

import CartItem from "./CartItem/CartItem";
import Button from "../UIComponents/Button/Button";

import styles from "./Cart.module.css";

class Cart extends Component {
    
    render () {
        return (
            <div className={ this.props.showCart ? styles.Cart : styles.HiddenCart}>
                    <h4 className={styles.CartMainHeader}> My bag </h4>
                <section className={styles.CartItems} >
                    <CartItem />
                    <CartItem />
                </section>
                <section className={styles.ButtonsContainer}>
                    <Button buttonType="regular" label="VIEW BAG" clicked={() => { console.log('clicked') }} />
                    <Button buttonType="regular" label="CHECK OUT" />
                </section>
            </div>
        )
    }
}

export default Cart