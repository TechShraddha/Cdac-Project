
import React from "react";
import Customer from "./Customer";



class Customers extends React.Component {

    constructor(props){
        super(props);
        this.state={customers:[]};
    }

    componentDidMount(){
        //fetch data from Rest API
        fetch('http://localhost:9796/api/customers')
        .then(
            async response=>{
                const data=await response.json();
                if(!response.ok){
                    const error=(data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                this.setState({customers:data});
                console.log(data);
            })
            .catch(error=>{
                this.setState({ErrorMessage: error.toString()});
                console.log("There was error while fetching data"+ error);
            })
    }

    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
        };
    };

    render() {

        return (

            <div style={this.getStyle()}>
                <h3>Customer Details </h3>
                {/* <div className="table-responsive">
                    <table class="table" width="100%">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>CustomerId </th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>Contact Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p id="psrno" customer_id  > + (i+1) +  </p>
                                </td>
                                <td>
                                    <p id='+pcustomerid+'" + i + ">" + customer[i].customer_id + " </p>
                                </td>
                                <td>
                                    <p id='+pfirstname" + i + "'>" + customer[i].first_name+ " </p>
                                </td>
                                <td>
                                    <p id='+plastname" + i + "'>" + customer[i].last_name + "</p>
                                </td>
                                <td>
                                    <p id='+pemail" + i + "'>" + customer[i].email + " </p>
                                </td>
                                <td>
                                    <p id='+pcontactnumber" + i + "'>" + customer[i].contant_no + " </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}

                {
                     this.state.customers.map(item => (
                        <Customer customer_id={item.customer_id}
                            first_name={item.first_name}
                            last_name={item.last_name}
                            email={item.email}
                            contant_no={item.contant_no}
                            // password={item.password}
                            active={item.active}
                        />
                    ))
                }
                
            </div>
        );
    }
}

export default Customers;