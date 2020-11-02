import React from "react"
import List from "./List"
import InputField from "./InputField"

function GroceryList(props){

        return (
            <div>
                <InputField onSubmit={handleItem}/>
                <List item={props} handleClick={props}/>
            </div>
        )
}

export default GroceryList