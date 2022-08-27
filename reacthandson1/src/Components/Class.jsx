import React, { Component } from 'react'
import './Comp.css'


class Class extends Component {
    constructor()
    {
        super();
        this.state = {show:false}
    }
    render(){
        return (
            <div>
                <button onClick={() => {this.setState({show:!this.state.show})}} class = "button2">To see styling in class Component</button>
                {
                    this.state.show ?
                    <div class = "head2">
                    <h1>This is created using class component</h1>
                    <p class = "ext">This is done using external CSS</p>
                    <p style={{color:"blue"}}>This is done using inline CSS</p>
                </div> : null
                }
            </div>
        );
    }
}

export default Class