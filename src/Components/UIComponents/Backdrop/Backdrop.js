import React, { Component } from "react";

import styles from "./Backdrop.module.css";

class Backdrop extends Component {

    render () {
        return (
            <div onClick={this.props.clicked} className={ this.props.show ? styles.Backdrop : styles.HideBackdrop}>
                {this.props.children}
            </div>
        )
    }
}

export default Backdrop;