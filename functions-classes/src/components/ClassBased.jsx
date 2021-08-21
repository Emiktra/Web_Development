import React, { Component } from 'react'

export default class ClassBased extends Component {
    // constructor(){
    //     super()
    //     this.state={
    //         count:0
    //     }
    // }
    state={
        count:0
    }
    increment = () =>{
        this.setState({count: this.state.count +1})
    }
    decrement = () =>{
        this.setState({count: this.state.count -1})
    }
    render() {
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <h2>{this.state.count}</h2>
                <button onClick={this.decrement}>-</button>
                <br />
                <button onClick={()=>{this.setState({count: this.state.count * 2})}}>×</button>
                <h3>{this.props.name} | {this.props.age}</h3>
            </div>
        )
    }
}
