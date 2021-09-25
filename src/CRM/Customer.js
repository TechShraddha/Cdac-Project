
import React from "react";

class Customer extends React.Component{

    render(){
        return(
            <div>
               
                <hr/>
                <p>customer_id: {this.props.customer_id}</p>
                <p>first_name: {this.props.first_name} </p>
                <p>last_name: {this.props.last_name}</p>
                <p>email : {this.props.email}</p>
                <p>contant_no: {this.props.contant_no}</p>
                {/* <p>password: {this.props.password}</p> */}
                <p>active: {this.props.active}</p>
            
                <br/>
            </div>
        );
    }
}

export default Customer;