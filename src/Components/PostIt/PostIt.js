import React from 'react'
import io from 'socket.io-client'
import axios from 'axios'

class PostIt extends React.Component {

    state = {
        user: 'daniel'
    }
    
    componentDidMount(){
        const socket = io()
        console.log(socket)
        socket.on("connect", ()=>{
            console.log('connected to the socket')
            socket.emit('user',{user: this.state.user})
        })

        socket.on('respond', (msg) => {
            console.log(msg)
        })
    }
    
    post = () => {

        console.log('work')
        let test = {
            text: "work"
        }

        axios.post('/PostIt', test)
            .then(res => console.log(res.data))
    }

    render(){
        return (
            <form onSubmit= {this.post}>
            <button type="submit">post</button>
            </form>
        )
    }
}

export default PostIt