
import React from "react";
import Counter from "./Counter";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = { likes: props.likes };

        this.handler = this.handler.bind(this);
    }

    handler(data) {
        this.setState({ likes: data });
    }

    

    render() {

        return (
            <div>
                <h3>Cakes Details </h3>
                <hr />
                <p>Title: {this.props.title}</p>
                <img src={this.props.imageurl} width="100" height="100" />
                <p>Description: {this.props.description} </p>
                <p>Quantity available: {this.props.quantity_in_stock}</p>
                <p>Unit price : {this.props.unit_price}</p>
                <p>Likes: {this.state.likes}</p>
                <Counter count={this.props.likes} handler={this.handler}></Counter>
                <button className="btn btn-success" onClick={() => this.handleCartClick()}>Add to cart </button>
                <br />
            </div>
        );
    }
}

export default Product;