import React, { Component } from 'react'

export class NewTask extends Component {
    constructor() {
        super()
        this.state = {
            word: ""
        }
    }

    inputChange = letter => {
        this.setState({
          word: letter
        })
    }

    handleAdd = () => {
        this.props.addWord(this.state.word)
        this.setState({input: ""})
    }

    render() {
        return (
            <div>
                <input onChange={e => this.inputChange(e.target.value)} placeholder="Enter a new task" type="text"/>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default NewTask
