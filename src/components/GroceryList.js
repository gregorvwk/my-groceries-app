import React, { Component } from "react"
import List from "./List"

class GroceryList extends Component {
constructor(props){
    super(props)
    this.state = {id: props.id, title: props.title, handleClickGroceryItem: props.handleClickGroceryItem}
}
    render(){
        return (
            <div>
                <List 
                id={this.state.id}
                handleClickGroceryItem={this.state.handleClickGroceryItem}
                title={this.state.title} 
            />
            </div>
        )
        }
}

export default GroceryList