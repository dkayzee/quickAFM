import React from 'react'
import axios from 'axios'

class PostIt extends React.Component {
    
    post = () => {

        console.log('work')
        let test = {
            text: "work"
        }

        axios.post('/postIt', test)
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