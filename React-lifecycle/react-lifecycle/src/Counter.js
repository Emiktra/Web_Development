import React, { Component } from 'react'
import "./counterStyle.css"

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Ali",
            count: 0,
        }
        console.log("constructor")
    };



    static getDerivedStateFromProps(props, state){
        console.log("DerivedStateFromProps")
        console.log(props, state)
        return 0
    }
    componentDidMount(){
        console.log("componentMounted")
    };
    componentDidUpdate(){
        console.log("Updated +")
    }



    increase = () =>{
        this.setState({count:this.state.count +1})
    }
    decrease = () =>{
        if (this.state.count < 1){return null} 
        else{this.setState({count:this.state.count -1})}
    }



    shouldComponentUpdate(){
        return true
    }




    getSnapshotBeforeUpdate(prevprops, prevstate){
        console.log(prevprops, prevstate)
        return 0
    }



    componentWillUnmount(){
        console.log("Unmount?")
    }




    render() {
        console.log("render")
        return (
            <div className="container">
                <p>counter: {this.state.count}</p>
                <button onClick={()=> this.increase()}>increase</button>
                <button onClick={()=> this.decrease()}>decrease</button>
            </div>
        )
    }
}
