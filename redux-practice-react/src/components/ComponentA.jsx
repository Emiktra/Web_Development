import React from 'react'
import "../App.css"
import {useSelector, useDispatch} from "react-redux"

const ComponentA = () => {
    const myCounter = useSelector((state)=> state.counter ) 
    const dispatch = useDispatch()

    return (
        <div className="App" style={{
            backgroundColor: "yellow",
            height: "35vh",
        }}>
            <h2>ComponentA</h2>
            <h2>Count: {myCounter}</h2>

            <button onClick={()=> dispatch({type: "increase_counter"})}>Reduce</button>
            <button onClick={()=> dispatch({type: "decrease_counter"})}>Increase</button>
            <button onClick={()=> dispatch({type: "reset_counter"})}>Reset</button>
        </div>
    )
}

export default ComponentA;