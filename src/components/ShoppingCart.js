import React from "react"
import List from "./List"

function ShoppingCart(props){

    return (
        <div>
            <List item={props} handleClick={props}/>
            <button onClick={() => props.handleButton()}>Empty Cart</button>
        </div>
    )
}


export default ShoppingCart