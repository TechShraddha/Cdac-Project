
import React from "react";
import Item from "./Item";

import data from '../data/cart.json';

class Cart extends React.Component {

    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
        };
    };

    render() {

        const cartItems = data;

        return (
            <div style={this.getStyle()}>
                <h3>My Shopping Cart  </h3>
                {
                    cartItems.map(item => (
                        <Item title={item.title}
                            imageurl={item.imageurl}
                            unit_price={item.unit_price}
                            quantity={item.quantity}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Cart;