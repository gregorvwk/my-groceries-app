import React, { Component } from "react"
import List from "./List"

class ShoppingCart extends Component {
    constructor(props) {
        super(props)
        this.state = {id: props.id, title: props.title}

    }
    render(){
    return (
        <div>
            <List 
            id={this.state.id}
            title={this.state.title}
            />
        </div>
    )
}
}

export default ShoppingCart