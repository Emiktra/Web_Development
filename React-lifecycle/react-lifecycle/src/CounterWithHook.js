import React, {useState, useEffect} from "react"
const CounterWithHook=()=>{
const [counter, setCounter] = useState(0);

useEffect(()=>{
    console.log("useEffect");
    return ()=> {console.log("funcCompWillunmount.")}
},[counter])

    const increase =()=>{
        setCounter(counter+1)
    }

    const [visible, setVisible] = useState(true);


    return(
        <div className="function">
            <h2>Functional Components</h2>
            <p>Counter: {counter}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={()=>setVisible(!visible)}>Toggle</button>
        </div>
    )
}
export default CounterWithHook