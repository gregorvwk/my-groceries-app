import React from "react"

function ListItem(props){

        return(
    <li 
        key={props.item.id}
        className="list-item"
        onClick={() => props.item.handleClickGroceryItem(props.item.id)}
        title={props.item.title}
    >
        {props.item.title}
    </li>
        )
    
}

export default ListItem