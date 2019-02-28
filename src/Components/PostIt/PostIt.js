import React from 'react'

import axios from 'axios'

class PostIt extends React.Component {
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