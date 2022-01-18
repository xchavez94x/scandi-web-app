import React, { Component } from "react";

import styles from "./Kids.module.css";
import { NavLink } from "react-router-dom";

class Kids extends Component {
    render () {
        return (
            <div className={styles.Kids} >
                <h1> Kids </h1>
                <NavLink to="/product/123" >Product</NavLink>
            </div>
        )
    }
}

export default Kids;