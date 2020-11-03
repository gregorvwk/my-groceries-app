import React, { Component } from "react"
import GroceryList from "./GroceryList"
import ShoppingCart from "./ShoppingCart"

class Container extends Component {
    constructor(){
        super()
        this.state = {
            groceryListItems: [
                {id: 1, title: "Appels", amount: 1},
                {id: 2, title: "Melk", amount: 1},
                {id: 3, title: "Sla", amount: 1} 
            ],
            shoppingListItems: [],
            itemId: 4
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.handleEmptyClick = this.handleEmptyClick.bind(this)
        this.addItemToGroceryList = this.addItemToGroceryList.bind(this)
    }


    handleClickGroceryItem(idItem) {
        let clickedItem = this.state.groceryListItems.filter(item => item.id === idItem)
        clickedItem = {id: clickedItem[0].id, title: clickedItem[0].title, amount: clickedItem[0].amount }
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
    addItemToGroceryList(Item){
        let itemIsInList = false
        this.state.groceryListItems.forEach(itemInList => {
            if(itemInList.title === Item){
                return itemIsInList = true
            }
            return itemInList
        })
        if(itemIsInList === true ){
            console.log(Item, "is already in list")
            const groceryList = this.state.groceryListItems.filter(itemAmount => itemAmount.title === Item)
            let groceryListItemAmount = groceryList[0].amount + 1
            const itemList = this.state.groceryListItems.filter(element => element.title === Item)
            const indexOfItemInList = this.state.groceryListItems.indexOf(itemList[0])
            this.setState(prevState => {
                prevState.groceryListItems[indexOfItemInList].amount = groceryListItemAmount
            })
            this.forceUpdate()
        }else {
            this.setState(prevState => {prevState.itemId++})
            this.setState(prevState => {
                const newItem = {id: this.state.itemId, title: Item, amount: 1}
                const newGroceryList = [...prevState.groceryListItems, newItem]
                console.log(newGroceryList)
                return {groceryListItems: newGroceryList}
            })
        }
    }

    render() {
    return(
        <div>
            <h1>Grocery List</h1>
            <GroceryList 
                item={this.state.groceryListItems} 
                handleClick={this.handleClickGroceryItem}
                handleSubmit={this.addItemToGroceryList}
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