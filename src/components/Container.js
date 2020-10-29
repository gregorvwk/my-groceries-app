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
    }


    handleClickGroceryItem(idItem) {
        const clickedItem = this.state.groceryListItems.filter(item => item.id === idItem)
        this.setState(prevState => ([...prevState.shoppingListItems, clickedItem]))
        console.log(this.state.shoppingListItems)
        console.log(clickedItem)
    }

    render() {
    return(
        <div>
            <h1>Grocery List</h1>
            <GroceryList item={this.state.groceryListItems} handleClick={this.handleClickGroceryItem}/>
            <h1>Shopping Cart</h1>
            <ShoppingCart item={this.state.shoppingListItems} />
        </div>
        )
    }
}

export default Container