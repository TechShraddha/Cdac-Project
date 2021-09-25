import React from 'react';

//React component life cycle events
class Dashboard extends React.Component{

    //Initialization
    constructor(props){
        console.log("On initialization");
        super(props);
        this.state={company:"CakeStore pvt ltd",
                    year:2020};
    }

    //event handler
    changeStateTitle(){
        console.log("click event handler code execution");
        this.setState({company:"CakeStore Food corporation"});
    }

    //event handler
    changeStateYear(){
        console.log("click event handler code execution");
        this.setState({year:2021});
    }

    //Pre Render Event handler
    componentWillMount(){
        console.log(" component Will Mount execution");
    }

    //Mounting: Rendering login
    render(){
        console.log("Rendering logic invocation");
        return(
            <div>
                <h1>Cake Store BalanceSheet</h1>
                <br/>
                <h3>{this.state.company}</h3>
                <h3>{this.state.year}</h3>
                <hr/>
                <a onClick={this.changeStateTitle.bind(this)}>Change Company name</a>
                <hr/>
                <a onClick={this.changeStateYear.bind(this)}>Change Financial year</a>

            </div>
        );
    }

    //Post Render Event handler
    componentDidMount(){
        console.log(" component did Mount execution");
    }

    //Pre Event handler
    componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    //Post Event handler
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

}

export default Dashboard;