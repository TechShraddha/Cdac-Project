
import React from "react";
import Product from "./Product";

import data from '../data/products.json';

class List extends React.Component {

    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
        };
    };

    render() {

        const cakes = data;

        return (

            <div style={this.getStyle()}>
                {
                    cakes.map(item => (
                        <Product title={item.title}
                            description={item.description}
                            imageurl={item.imageurl}
                            unit_price={item.unit_price}
                            quantity_in_stock={item.quantity_in_stock}
                            likes={item.likes}
                        />
                    ))
                }
            </div>
        );
    }
}

export default List;