
import React from 'react';
import { GoThumbsup, GoThumbsdown } from 'react-icons/go';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: props.count };
    }

    render() {
        return (
            <div>
                <h6>Like <GoThumbsup style={{ color: 'black', cursor: 'pointer' }} onClick={() => {
                    console.log(" like");
                    this.setState({ count: this.state.count + 1 });
                    this.props.handler(this.state.count + 1);
                }} />
                </h6>
                <h6>Dislike <GoThumbsdown style={{ color: 'black', cursor: 'pointer' }} onClick={() => {
                    console.log("Unlike");
                    this.setState({ count: this.state.count - 1 });
                    this.props.handler(this.state.count - 1);
                }} /></h6>
            </div>
        );
    }
}

export default Counter;
