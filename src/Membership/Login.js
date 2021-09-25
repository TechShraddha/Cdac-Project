import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

function Login(){

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const history=useHistory();

    useEffect(() =>{
        if(localStorage.getItem('user-Info')){
            history.push("/add");
        }
    }, [])

    async function login(){
        console.warn(email, password);
        let item={email, password};
        var result=fetch("http://localhost:9796/api/login", {
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        });
        result= await result;
        localStorage.setItem("user-Info", JSON.stringify(result))
        history.push("/add")
    }

    return(
        <div>
            <h2> Login Page</h2>
                <div className="col-sm-6 offset-sm-3">
                    <input type="email" placeholder="email" 
                    onChange={(e)=>setEmail(e.target.value)} 
                    className="form-control"  />
                    <br/>
                    <input type="password" placeholder="password" 
                    onChange={(e)=>setPassword(e.target.value)} 
                    className="form-control"  />
                    <br/>
                    <button type="submit" onClick={login} className="btn btn-success" >Login</button>
                </div>
        </div>
    )


}

export default Login;