import React,{useState, useRef} from "react"

export default function FunctionBased(){
const [count, setCount] = useState(0);
const [empty, setEmpty] = useState(0);
const [full, setFull] = useState(0) 
const [text, setText] = useState("")
const divRef = useRef(null)
const value2 = useRef(0)

const increment=()=>{
    setCount(count+1);
    value2.current = value2.current +1;
}
const decrement=()=>{
    if (count > 0){setCount(count-1)}
}

// useEffect(() => {
//     console.log("useEffect")
//     return () => console.log("goodbye")
// }, [empty, full])

const inputRef = useRef(null);
const changeBGColor=()=>{
    inputRef.current.parentElement.style.backgroundColor = text
    const newInput = document.getElementById("new")
    newInput.style.backgroundColor = text
}
const handleText = (e)=>{
    setText(e.target.value)
}
const onDivBorder=()=>{
    divRef.current.style.border = "10px solid green";
}

    return(
        <div>
            <div>
                <button ref={value2} onClick={increment}>+</button>
                <h2>{count}</h2>
                <button onClick={decrement}>-</button>
            </div>
            <br />
            <br />
            <div>
                <h1>Empty</h1>
                <h2>{empty}</h2>
                <button onClick={()=>setEmpty(empty+1)}>+</button>
            </div>
            <div>
                <h1>Full</h1>
                <h2>{full}</h2>
                <button onClick={()=>setFull(full+1)}>+</button>
            </div>
            <br /> <hr /> <br />
            <input id="new" ref={inputRef} type="text" value={text} onChange={handleText}/>
            <button onClick={changeBGColor}>BG Colour</button>
            <button ref={divRef} onClick={onDivBorder}>Border</button>
        </div>
    )
}