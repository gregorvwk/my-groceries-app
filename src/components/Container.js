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
            shoppingListItems: [],
            itemId: 0
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
    inputItem(Item){
        this.setState(prevState => {
            const newItemId = prevState.itemId++
            return newItemId
        })
        this.setState(prevState => {
            const newItem = {id: this.state.itemId, title: Item}
            const addItem = [...prevState.groceryListItems, newItem]
            return {groceryListItems: addItem}
        })
    }

    render() {
    return(
        <div>
            <h1>Grocery List</h1>
            <GroceryList 
                item={this.state.groceryListItems} 
                handleClick={this.handleClickGroceryItem}
                onSubmit={this.inputItem}
            />
            <h1>Shopping Cart</h1>
            <ShoppingCart 
                item={this.state.shoppingListItems} 
                handleButton={this.handleEmptyClick} 
                handleClick={e => e.preventDefault}
            />
        </div>
        )
    }
}

export default Container