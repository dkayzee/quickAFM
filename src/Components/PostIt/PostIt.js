import React from 'react'
import io from 'socket.io-client'
import axios from 'axios'

class PostIt extends React.Component {
    
    componentDidMount(){
        const socket = io('http://localhost:3001')
        console.log(socket)
        socket.on("connect", ()=>{
            console.log('connected to the socket')
            socket.emit('greet',{message: 'hello server-side'})
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