import React, {Component} from 'react'
import Todo from './Todo'

class List extends Component {
    
    render() {
        const todoList = this.props.todoList.map((item, index) => <Todo key={index} item={item}/>)
        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default List