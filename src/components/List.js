import React from "react"
import ListItem from "./ListItem"

function List(props) {
const item = props.item.item
const itemsSeperate = item.map(element => <ListItem key={element.id} item={element} />)
    return(
        <ul>
            {itemsSeperate}
        </ul>
    )
}

export default List