import React, { Component } from "react"
import GroceryList from "./GroceryList"
import ShoppingCart from "./ShoppingCart"

class Container extends Component {
    constructor(props){
        super(props)
        this.state = {
            groceryListItems: [
                {id: 1, title: "Appels"},
                {id: 2, title: "Melk"} 
            ],
            shoppingListItems: []
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
    }


    handleClickGroceryItem(idItem) {
        const groceryToCart = this.state.groceryListItems.map(item => {
            if(item.id === idItem){
                if(this.state.shoppingListItems === []){
                    this.setState({shoppingListItems: [item]})
                }else {
                    this.setState(prevState => ({shoppingListItems: [...prevState.shoppingListItems, item]}))
                }
                // const newArray = this.state.groceryListItems.filter(items => items !== item)

                // const updateGroceryList = this.state.groceryListItems.indexOf(item)
                // const newArray = this.state.groceryListItems.splice(updateGroceryList, 1)
                let newArray = this.state.groceryListItems
                newArray.splice(0, 1)
                console.log(newArray)
                this.setState({groceryListItems: newArray})
            }
        })

        console.log(this.state.shoppingListItems)
        return groceryToCart
    }

    render() {
        const groceryItems = 
        this.state.groceryListItems.map(item => <GroceryList 
            id={item.id} 
            title={item.title} 
            handleClickGroceryItem={this.handleClickGroceryItem}
        />)
        const shoppingCartItems = 
        this.state.shoppingListItems.map(item => <ShoppingCart 
            id={item.id} 
            title={item.title} 
        />)

    return(
        <div>
            <h1>Grocery List</h1>
            {groceryItems}
            <h1>Shopping Cart</h1>
            {shoppingCartItems}
        </div>
        )
    }
}

export default Container