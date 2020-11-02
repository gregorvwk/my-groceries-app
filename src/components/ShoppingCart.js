import React from "react"
import List from "./List"

function ShoppingCart(props){

    function handleItemClick(idItem){
        console.log("click" + idItem)
    }
    return (
        <div>
            <List item={props} handleClick={handleItemClick}/>
            <button onClick={() => props.handleButton()}>Empty Cart</button>
        </div>
    )
}


export default ShoppingCart