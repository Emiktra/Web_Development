import React from "react";

class ClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {surname:"Haji", naame:"Api"}
    }
    render(){
        return(
            <div className="wrapper" style={{backgroundColor: "orange"}}>
                <div>
                    <h1>Hello there</h1>
                    <p>{this.props.name}</p>
                    <p>{this.state.surname} {this.state.naame}</p>
                </div>
            </div>
        )
    }
}
export default ClassComponent;