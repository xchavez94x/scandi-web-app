import React, { Component } from "react";

import Button from "../../UIComponents/Button/Button";
import Image from "../../UIComponents/Image/Image";
import imageOne from "../../../Assets/images-for-test/Image1.jpg";

import styles from "./CartItem.module.css";

class CartItem extends Component {
    
    render () {
        return (
            <div className={styles.CartItem}>
                <section className={styles.InfoAndOptions} >
                    <div className={styles.Info}>
                        <h4 className={styles.InfoHeader} >
                            Apollo
                        </h4>
                        <p className={styles.InfoParagraph} >
                            Runing shirt
                        </p>
                        <p className={styles.InfoParagraph} >
                            $50.00
                        </p>
                    </div>
                    
                    <div className={styles.InfoOptions} >
                        <Button buttonType="squareButton" label="S"  />
                        <Button buttonType="squareButton" label="M"  />
                    </div>
                </section>
                <section className={styles.QuantityButtons} >
                    <Button buttonType="squareButton" label="+"  />
                    <span>1</span>
                    <Button buttonType="squareButton" label="-"  />
                </section>
                <section className={styles.OrdersAndImage} > 
                    <Image imagePath={imageOne} />
                </section>
            </div>
        )
    }
}

export default CartItem