import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.css";

class NavItem extends Component {
    render () {
        return (
            <NavLink 
                activeClassName={styles.ActiveRoute}
                className={styles.NavItem } 
                exact={this.props.exact}
                to={this.props.to} >
                    {this.props.label}
            </NavLink>
        )
    }
}

export default NavItem;