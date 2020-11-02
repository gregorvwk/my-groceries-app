import React, { Component } from "react"

class InputField extends Component {
    constructor(props){
        super(props)
        this.state = {
            newItemName: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        const {value} = event.target
        this.setState({ newItemName: value })
        console.log(this.state.newItemName)
    }
    handleClick(e){
        e.preventDefault()
        const newItem = this.state.newItemName
        this.props.handleSubmit.handleSubmit(newItem)
        this.setState({newItemName: []})
        return newItem
    }
 

 render(){
    return(
        <div>
            <input 
                type="text" 
                placeholder="Item"
                id="inputItem"
                value={this.state.newItemName}
                onChange={this.handleChange}
                ></input>
            <button 
                type="submit"
                onClick={this.handleClick}
            >Submit</button>
        </div>
    )
}
}

export default InputField