import React from 'react'
import { connect } from 'react-redux'
import { sellLaptop } from '../redux/actions/actions'

const LaptopComp = (props) => {
    return (
        <div className="container">
            <h2>Laptops -- Pure Redux -- </h2>
            <h3>Number of Laptops: {props.numberOfLaptops}</h3>
            <button onClick={props.sellLaptop}>Sell Laptop</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        numberOfLaptops: state.laptop.numberOfLaptops
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        sellLaptop: ()=>{dispatch(sellLaptop())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaptopComp)



// LaptopComp.js
// import React from 'react';
// import {connect} from 'react-redux'
// import {sellLaptop} from '../redux/actions/actions'
// function LaptopComp(props) {
//     // console.log(`props`, props)
//     const [number, setNumber] = React.useState(1)
//     return (
//         <div className="container">
//             <h2>Laptops --Pure Redux--</h2>
//             <h3>Number of laptops : <span className="number">{props.numberOfLaptops}</span></h3>
//             <input type="number"value={number} onChange={(e)=> setNumber(e.target.value)}/>
//             <button onClick={()=>props.sellLaptop(number)}>Sell Laptop</button>
//         </div>
//     )
// }
// const mapStateToProps = (state) => {
//     return {
//         numberOfLaptops: state.laptop.numberOfLaptops,
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         sellLaptop:(number)=> dispatch(sellLaptop(number)),
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(LaptopComp)
