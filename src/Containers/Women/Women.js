import React, { Component } from "react";

import Card from "../../Components/Card/Card";
import imageOne from "../../Assets/images-for-test/Image1.jpg";
import imageTwo from "../../Assets/images-for-test/Image2.jpg";

import styles from "./Women.module.css";

class Women extends Component {
    render () {
        return (
            <div className={styles.Women}>
                <div className={styles.Header}>
                    <h1> Women </h1>
                </div>
                
                <div className={styles.Cards} >
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

export default Women;