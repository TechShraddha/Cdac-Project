
import React from 'react';

//class component
class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            contant_no: "",
            password: ""

        };
    }

    render() {
        return (
            <div>
                <h3> New Customer Registration</h3>
                {/* <form> */}
                <div className="form-group">
                    <label htmlFor="first_name">First Name:</label>
                    <input type="text"
                        value={this.state.first_name}
                        onChange={(event) => {
                            this.setState({ first_name: event.target.value })
                        }}
                        className="form-control" id="first_name" />
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name:</label>
                    <input type="text"
                        value={this.state.last_name}
                        onChange={(event) => {
                            this.setState({ last_name: event.target.value })
                        }}
                        className="form-control" id="last_name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email"
                        value={this.state.email}
                        onChange={(event) => {
                            this.setState({ email: event.target.value })
                        }}
                        className="form-control" id="email" />
                </div>

                <div className="form-group">
                    <label htmlFor="contant_no">Contact Number:</label>
                    <input type="text"
                        value={this.state.contant_no}
                        onChange={(event) => {
                            this.setState({ contant_no: event.target.value })
                        }}
                        className="form-control" id="contant_no" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password"
                        value={this.state.password}
                        onChange={(event) => {
                            this.setState({ password: event.target.value })
                        }}
                        className="form-control" id="password" />
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" /> Remember me</label>
                </div>
                <button

                    onClick={() => {
                       console.log(this.state);
                       //store registered data in localstorage
                       localStorage.setItem("customer", JSON.stringify(this.state));

                    }}
                    className="btn btn-success">Submit</button>
                {/* </form> */}
            </div>
        );
    }
}

export default Register;