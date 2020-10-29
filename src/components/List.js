import React from "react"
import ListItem from "./ListItem"

function List(props) {

    const handleClickItem = props.item.handleClick
    const item = props.item.item
    const itemsSeperate = item.map(element => <ListItem key={element.id} item={element} handleClick={handleClickItem} />)
    return(
        <ul>
            {itemsSeperate}
        </ul>
    )
}

export default List