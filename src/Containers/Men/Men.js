import React, { Component } from "react";

import Cards from "../../Components/Cards/Cards";

import styles from "./Men.module.css";

class Men extends Component {
    componentDidMount() {
        let graphqlQuery = {
            query: `
            {
                categories {
                    products {
                        id
                        name
                        inStock
                        description
                        gallery
                        attributes {
                        name
                        type
                        items {
                            displayValue
                            value
                        }
                        }
                    }
                    }
                }
            `
        }
        fetch("http://localhost:4000", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(graphqlQuery)
        })
        .then( res => res.json())
        .then( resData => {
            console.log(resData)
        })
        .catch(err => {
            console.log(err)
        })
    }
    render () {
        return (
            <div className={styles.Men}>
                <Cards />
            </div>
        )
    }
}

export default Men;