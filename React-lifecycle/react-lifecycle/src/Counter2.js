import React, { Component } from 'react'
class Counter2 extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         counter: 0
    //     }
    //     this.increase = this.increase.bind(this)
    // }

    state={
        counter:0,
        visible :true
    }

    componentDidMount=()=>{
        console.log("componentDidMount")
    }

    componentDidUpdate=()=>{
        console.log("componentDidUpdate")
    }

    componentWillUnmount=()=>{
        this.setState({visible: !this.state.visible})
    }
    increase = ()=>{
        this.setState({counter: this.state.counter +1})
    }


    render() {
        return (
            <div className="class">
                <h2>Class Component</h2>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.increase}>Increase</button>
            </div>
        )
    }
}
export default Counter2;