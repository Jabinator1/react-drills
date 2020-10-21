import React, { Component } from 'react'

class Login extends Component {

    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    eventHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onClickFunc(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }
    render() {
        return (
            <div>
                <input onChange={e => this.eventHandler(e)} placeholder="Username" name="username" type="text"/>
                <input onChange={e => this.eventHandler(e)} placeholder="Password" name="password" type="password"/>
                <button onClick={() => this.onClickFunc()} />
            </div>
        )
    }
}

export default Login