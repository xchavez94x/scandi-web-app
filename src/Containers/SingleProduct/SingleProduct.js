import React, { Component } from "react";

import Image from "../../Components/UIComponents/Image/Image";
import image from "../../Assets/images-for-test/Image1.jpg";
import Button from "../../Components/UIComponents/Button/Button";

import styles from "./SingleProduct.module.css";

class SingleProduct extends Component {
    state= {
        prodId: null
    }

    componentWillMount() {
        console.log(this.props.match.params.productId)
        let productId = this.props.match.params.productId;
        this.setState({ prodId: productId })
    }
    render () {
        return (
            <div className={styles.SingleProduct}>
                <section className={styles.Images}>
                    <div className={styles.ImagesList}>
                        <Image classes={styles.image} imagePath={image} />
                        <Image classes={styles.image} imagePath={image} />
                        <Image classes={styles.image} imagePath={image} />
                    </div >
                    <div className={styles.ChosedImage} >

                    </div>
                </section>
                <section className={styles.Info}>
                    <div className={styles.Headers} >
                        <h2>name</h2>
                        <h3>description</h3>
                    </div>
                    <div className={styles.Sizes} >
                        SIZE:
                        <div className={styles.ChooseSize} >

                        </div>
                    </div>
                    <div className={styles.Prices} >
                        <h3>price</h3>
                    </div>
                    <section className={styles.Actions}>
                    <Button buttonType="anotherRegularButton" label="ADD TO CART" />
                </section>
                <p>
                    info
                </p>
                </section>
                
            </div>
        )
    }
}

export default SingleProduct;