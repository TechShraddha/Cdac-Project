import { useEffect, useState } from "react";

//Basic Hooks, useState , useEffect, useContext

// useReducer, useCallback, useRef


function CounterExample(){

    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`You Clicked ${count} times`;
    });


    return(

        <div>
            <h1>You Clicked {count}</h1>

            <button onClick={()=>setCount(count+1)}>Click Me!</button>
        </div>

    );
}

export default CounterExample;