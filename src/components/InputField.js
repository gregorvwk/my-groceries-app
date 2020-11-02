import React, { Component } from "react"

class InputField extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    // handleChange(event){
    //     const {value} = event.target
    //     this.setState({ item: value })
    //     console.log(this.props.item)
    // }
 

    render(){

    return(
        <div>
            <input 
                type="text" 
                placeholder="Item"
                name="inputItem"
                value={this.handleChange}
                onSubmit={() => props.handleItem(value)}
                ></input>
            <button type="submit">Submit</button>
        </div>
    )
}
}

export default InputField