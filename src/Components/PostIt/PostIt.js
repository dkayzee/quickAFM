import React from 'react'
import io from 'socket.io-client'
import axios from 'axios'

const socket = io('http://localhost:3001')

class PostIt extends React.Component {
    
    componentDidMount(){
        socket.on("status", (msg)=>{
            console.log(msg)
        })
    }
    
    post = () => {

        console.log('work')
        let shit = {
            text: "fuck"
        }

        axios.post('/PostIt', shit)
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