
import React from "react";

class Order extends React.Component{

    render(){
        return(
            <div>
                <h3>Order Details </h3>
                <hr/>
                <p>order_id: {this.props.order_id}</p>
                <p>customer_id: {this.props.customer_id} </p>
                <p>cake_id: {this.props.cake_id}</p>
                <p>order_date : {this.props.order_date}</p>
                <p>order_amount: {this.props.order_amount}</p>
                <p>status: {this.props.status}</p>
                <p>payment_mode: {this.props.payment_mode}</p>
            
                <br/>
            </div>
        );
    }
}

export default Order;