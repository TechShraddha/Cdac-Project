import React from 'react';

class Goodbye extends React.Component {

    handleClick() {
        this.props.history.push('/hello');
    }
    
    render() {
        return (
            <div>
                <h2>Welcome to IACSD</h2>
                <h2>Thank you for all the Learning</h2>
                <button className="btn btn-success" onClick={() => this.handleClick()}>Hello</button>
            </div>
        );
    }
}
export default Goodbye;