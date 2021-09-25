
import React from "react";

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = { quantity: props.quantity };
    }

    render() {

        return (
            <div>
                <hr />
                <p>Title: {this.props.title}</p>
                <img src={this.props.imageurl} width="100" height="100" />
                <p>Quantity : {this.state.quantity}</p>
                {/* <input value={this.state.quantity} type="text"/> */}
                <p>Unit price : {this.props.unit_price}</p>
                <p>Amount : {this.props.unit_price * this.props.quantity} Rs</p>
                <button>Remove </button>
                <br />
            </div>
        );
    }
}

export default Item;