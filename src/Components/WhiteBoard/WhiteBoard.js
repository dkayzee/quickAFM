import React from 'react'
import './WhiteBoard.css'

import io from 'socket.io-client'

import PostIt from '../PostIt/PostIt'
import axios from 'axios';

class WhiteBoard extends React.Component {

    state = {
        allUsersConnected: false,
        counter: 60
    }  

    getGroupMember = async () => {
        try{
            if(this.props.groupId !== ''){
                const resp = await axios(`/group/${this.props.groupId}`)
                console.log(resp.data)
                const userInfo = await resp.data.users
                const groupMembers = []
                await userInfo.forEach((user)=>{
                    groupMembers.push({userId:user.id, loggedIn:false})
                   
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

    toggleLoggedIn = (msg) => {
        let copy = this.state.groupMembers
        console.log(copy)
        for(let i = 0; i < copy.length; i++){
            if(this.state.groupMembers[i].userId === msg){
                copy[i].loggedIn = true
                this.setState({groupMembers:copy})
            }
        }
    }

    componentDidMount (){
        this.getGroupMember()
       
        const socket = io()
        console.log(socket)
        socket.on("connect", ()=>{
            console.log('Successfully connected to the socket')
        })
    }

    render(){

        const socket = io()
        socket.emit('user', this.props.user)

        socket.on('respond', (msg) => {
            console.log(this.state)
        })

        if(this.state.allUsersConnected && this.state.counter === 0){
            return (
                <div>
                    <PostIt />
                </div>
            )
        }

        if(this.state.allUsersConnected === false){
            return (
                <div>
                    waiting for all users to connect!
                </div>
            )
        }

        else{
            return (
                <div>
                    {this.state.counter}
                </div>
            )
        }
    }
}

export default WhiteBoard