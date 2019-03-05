import React from 'react'
import './WhiteBoard.css'

import io from 'socket.io-client'

import PostIt from '..//PostIt/PostIt'

class WhiteBoard extends React.Component {

    state = {
        user: 'daniel',
        allUsersConnected: false
    }  

    componentDidMount(){
        const socket = io()
        console.log(socket)
        socket.on("connect", ()=>{
            console.log('connected to the socket')
            socket.emit('user', this.props.user)
        })

        socket.on('respond', (msg) => {
            console.log(msg)
        })
    }

    render(){
        return (
            <div>
                <PostIt />
            </div>
        )
    }
}

export default WhiteBoard