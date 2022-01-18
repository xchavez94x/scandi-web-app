import React, { Component } from "react";

import Cards from "../../Components/Cards/Cards";

import styles from "./Men.module.css";

class Men extends Component {

    render () {
        return (
            <div className={styles.Men}>
                <Cards />
            </div>
        )
    }
}

export default Men;