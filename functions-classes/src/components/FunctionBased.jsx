import React,{useState} from "react"

export default function FunctionBased(){
const [count, setCount] = useState(0);
const [empty, setEmpty] = useState(0);
const [full, setFull] = useState(0) 

const increment=()=>{
    setCount(count+1)
}
const decrement=()=>{
    if (count > 0){setCount(count-1)}
}

// useEffect(() => {
//     console.log("useEffect")
//     return () => console.log("goodbye")
// }, [empty, full])

    return(
        <div>
            <button onClick={increment}>+</button>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <br />
            <br />
            <h1>Empty</h1>
            <h2>{empty}</h2>
            <button onClick={()=>setEmpty(empty+1)}>+</button>
            <h1>Full</h1>
            <h2>{full}</h2>
            <button onClick={()=>setFull(full+1)}>+</button>
        </div>
    )
}