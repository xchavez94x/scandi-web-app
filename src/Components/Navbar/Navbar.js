import React, {Component} from "react";

import NavItem from "./NavItem/NavItem";
import Image from "../UIComponents/Image/Image";
import Logo from "../../Assets/Icons/a-logo.svg";
import CartLogo from "../../Assets/Icons/cart.svg";
import Dollar from "../../Assets/Icons/currency.svg";

import styles from "./Navbar.module.css";

class Navbar extends Component {
    render() {
        return (
            <div className = { styles.Navbar } >
                <section className={ styles.RoutesSection }>
                    <NavItem to="/" exact label="WOMEN" />
                    <NavItem to="/men" label="MEN" />
                    <NavItem to="/kids" label="KIDS" />
                </section>
                <section className={styles.Logo} >
                    <Image imagePath={Logo} alt="site logo" />
                </section>
                <section className={styles.CartSection} >
                    <div className={styles.Currency}>
                        <Image imagePath={Dollar} alt="cart" />
                    </div>
                    <div onClick={this.props.clicked} className={styles.Cart}>
                        <Image imagePath={CartLogo} alt="cart" />
                    </div>
                </section>
            </div>  
        )
    }
}

export default Navbar;