import React, { Component } from "react"

class ListItem extends Component {
    constructor(props){
    super(props)
    this.state = {id: props.id, title: props.title, handleClickGroceryItem: props.handleClickGroceryItem}
    }
    render(){
        return(
    <li 
        key={this.state.id}
        className="list-item"
        onClick={() => this.state.handleClickGroceryItem(this.state.id)}
        title={this.state.title}
    >
        {this.state.title}
    </li>
        )
    }
}

export default ListItem