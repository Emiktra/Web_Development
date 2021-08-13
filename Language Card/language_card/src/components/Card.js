import React, { useState } from 'react'
import "./Card.css"



export default function Card({item}) {
    const [showing, setShowing] = useState(true)
    function onClickSwitch(){
        setShowing(!showing)
    }

    return (
        <div className="indCardCont" onClick={onClickSwitch}>
            {showing?<div>
                <img className="cardImg"src={item.img} />
                <p>{item.name}</p>
            </div>:
            <ul className="infoLang">
                {item.options.map((info, index) => <li>{info}</li>)}
                {/* <li>{item.options[0]}</li>
                <li>{item.options[1]}</li>
                <li>{item.options[2]}</li> */}
            </ul>}
        </div>
    )
}
