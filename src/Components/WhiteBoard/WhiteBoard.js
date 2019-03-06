import React from 'react'
import './WhiteBoard.css'

import io from 'socket.io-client'

import PostIt from '../PostIt/PostIt'
import axios from 'axios';

class WhiteBoard extends React.Component {

    state = {
        user: 'daniel',
        allUsersConnected: false
    }  

    getGroupMember = async () => {
        try{
            if(this.props.groupId !== ''){
                const resp = await axios(`/group/${this.props.groupId}`)
                console.log(resp.data)
                const userInfo = await resp.data.users
                const groupMembers = {}
                await userInfo.forEach((user)=>{
                    groupMembers[user.id] = false
                   
                })
                this.setState({groupMembers})
                console.log(this.state)
            }
            else {
                console.log('error')
            }
        } catch(e){
            console.log(e.message)
        }
    }

    componentDidMount(){
        this.getGroupMember()
       
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