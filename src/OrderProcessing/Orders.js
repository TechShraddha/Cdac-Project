
import React from "react";
import Order from "./Order";

import data from '../data/orders.json';

class Orders extends React.Component {

    render() {

        const orders = data;

        return (

            <div>
                {
                    orders.map(item => (
                        <Order order_id={item.order_id}
                            customer_id={item.customer_id}
                            cake_id={item.cake_id}
                            order_date={item.order_date}
                            order_amount={item.order_amount}
                            status={item.status}
                            payment_mode={item.payment_mode}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Orders;