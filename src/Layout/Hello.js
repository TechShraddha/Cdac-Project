
import React from 'react';
import { useHistory } from 'react-router-dom';

const Hello = () => {
    const history = useHistory();
    var customer = JSON.parse(localStorage.getItem("customer"));
    console.log("Retrived Data " + customer.first_name);

    const handleGoodbyeClick = () => {
        console.log("Good bye button is clicked ");
        history.push('/goodbye');
    }

    const handleLoginClick = () => {
        console.log("Login button is clicked ");

        history.push('/login');
    }

    return (
        <div>
            <h2>Welcome to IACSD</h2>
            <button onClick={handleGoodbyeClick}>Goodbye</button><br />
            <button onClick={handleLoginClick}>Login</button>
        </div>
    );
}
export default Hello;