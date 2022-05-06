import React, { Component } from "react";
import { withRouter } from "react-router-dom"

import CartItem from "./CartItem/CartItem";
import Button from "../UIComponents/Button/Button";

import styles from "./Cart.module.css";

class Cart extends Component {
    // componentDidMount () {
    //     console.log(this.props)
    // }
    
    render () {
        return (
            <div className={ this.props.showCart ? styles.Cart : styles.HiddenCart}>
                    <h4 className={styles.CartMainHeader}> My bag </h4>
                <section className={styles.CartItems} >
                    <CartItem />
                    <CartItem />
                </section>
                <section className={styles.ButtonsContainer}>
                    <Button 
                        clicked={() => this.props.history.push('/check-cart')} 
                        buttonType="regular" 
                        label="VIEW BAG"  />
                    <Button 
                        buttonType="regular" 
                        label="CHECK OUT" />
                </section>
            </div>
        )
    }
}

export default withRouter(Cart);