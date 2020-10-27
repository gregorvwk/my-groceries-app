import React, { Component } from "react"
import ListItem from "./ListItem"

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {id: props.id, title: props.title, handleClickGroceryItem: props.handleClickGroceryItem}

    }
    render() {
        return(
            <ul>
                <ListItem 
                    id={this.state.id}
                    handleClickGroceryItem={this.state.handleClickGroceryItem}
                    title={this.state.title} 
                />
            </ul>
        )
    }
}

export default List