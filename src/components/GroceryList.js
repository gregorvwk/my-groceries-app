import React from "react"
import List from "./List"

function GroceryList(props){

        return (
            <div>
                <List item={props} handleClick={props} />
            </div>
        )
}

export default GroceryList