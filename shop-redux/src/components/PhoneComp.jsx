import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sellPhone } from '../redux/actions/actions'

export const PhoneComp = () => {
    const [number, setNumber]=useState(1)
    const numberofPhones= useSelector((state)=> state.phone.numberOfPhones)

    const dispatch = useDispatch()

    return (
        <div className="container">
            <h2>Phones -- Hooks -- </h2>
            <h3>Number of Phones: {numberofPhones}</h3>
            <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
            <button onClick={()=>dispatch(sellPhone(number))}>Sell Phones</button>
        </div>
    )
}