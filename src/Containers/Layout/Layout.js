import React, { Component } from "react";
import { Route, Switch } from "react-router-dom"

import Navbar from "../../Components/Navbar/Navbar";
import Women from "../Women/Women";
import Men from "../Men/Men";
import Kids from "../Kids/Kids";
import SingleProduct from "../SingleProduct/SingleProduct";
import CheckCart from "../../Components/Cart/CheckCart/CheckCart";

import styles from "./Layout.module.css";

class Layout extends Component {


    render () {
        return (
            <div className={styles.Layout}>
                <Navbar clicked={this.showCartHandler} />
                <Switch>
                    <Route  path="/men" component={Men} />
                    <Route  path="/kids" component={Kids} />
                    <Route path="/product/:productId" component={ SingleProduct } />
                    <Route path="/check-cart" component={CheckCart} />
                    <Route  path="/" exact component={Women} />
                </Switch>
            </div>
        )
    }
}

export default Layout;