import React, { Component } from "react"
import GroceryList from "./GroceryList"
import ShoppingCart from "./ShoppingCart"

class Container extends Component {
    constructor(){
        super()
        this.state = {
            groceryListItems: [
                {id: 1, title: "Appels"},
                {id: 2, title: "Melk"},
                {id: 3, title: "Sla"} 
            ],
            shoppingListItems: []
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.handleEmptyClick = this.handleEmptyClick.bind(this)
    }


    handleClickGroceryItem(idItem) {
        let clickedItem = this.state.groceryListItems.filter(item => item.id === idItem)
        clickedItem = {id: clickedItem[0].id, title: clickedItem[0].title }
        this.setState(prevState => {
            const newList = [...prevState.shoppingListItems, clickedItem]
           return {shoppingListItems: newList}
        })
        let newGroceryList = this.state.groceryListItems.filter(item => item.id !== idItem)
        this.setState({groceryListItems: newGroceryList})
    }
    handleEmptyClick(){
        this.setState({shoppingListItems: []})
    }

    render() {
    return(
        <div>
            <h1>Grocery List</h1>
            <GroceryList item={this.state.groceryListItems} handleClick={this.handleClickGroceryItem}/>
            <h1>Shopping Cart</h1>
            <ShoppingCart item={this.state.shoppingListItems} handleButton={this.handleEmptyClick}/>
        </div>
        )
    }
}

export default Container