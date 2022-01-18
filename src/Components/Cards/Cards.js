import React, { Component } from "react";

import Card from "../Card/Card";
import imageOne from "../../Assets/images-for-test/Image1.jpg";
import imageTwo from "../../Assets/images-for-test/Image2.jpg";
import Backdrop from "../UIComponents/Backdrop/Backdrop";
import Cart from "../Cart/Cart";

import styles from "./Cards.module.css";

class Cards extends Component {
    state = {
        showCart: false
    }
    showCartHandler = () => {
        console.log(this.state.showCart)
        this.setState( prevState => {
            return {
                ...prevState,
                showCart:! prevState.showCart
            }
        })
    }
    render () {
        return (
            <div className={styles.Cards}>

                <Cart showCart={this.state.showCart} />
                <Backdrop show={this.state.showCart} clicked={this.showCartHandler}></Backdrop>
                
                <div className={styles.Header}>
                    <h1 onClick={this.showCartHandler}>Men</h1>
                </div>
                
                <div className={styles.CardsList} >
                    <Card path={imageOne} />
                    <Card path={imageTwo} />
                    <Card path={imageOne} />
                    <Card path={imageTwo} />
                    <Card path={imageOne} />
                    <Card path={imageTwo} />
                    <Card path={imageOne} />
                    <Card path={imageTwo} />
                </div>
            </div>
        )
    }
}

export default Cards