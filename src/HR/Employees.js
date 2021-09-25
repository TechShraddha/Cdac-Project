
import React from "react";

import EmployeeService from "./EmployeeService";

class ListEmployeeComponent extends React.Component{

  

        constructor(props){
            super(props);
            this.state={employees:[]};
        }

        componentDidMount(){
            EmployeeService.getEmployees().then((res)=>{
                this.setState({employees: res.data});
            });
        }

        
        render(){
            return(
                <div>

                </div>

            );
        }
    
}