import React from 'react'
import axios from 'axios'

import './PostIt.css'

class PostIt extends React.Component {
    
    state ={
        form: {
            text: ''
        }
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        let newPost = {
            text: this.state.form.text
        }

        axios.post('/postIt', newPost)
            .then(res => console.log(res.data))

        this.setState({
            form: {
                text: ""
            }
        })
    }

    onFormChange = (e) => {
        console.log(e.target)
        this.setState({
            form: {
                text: e.target.value
            }
        })
    }

    render(){
        return (
            <div className="PostIt">
                <form onSubmit= {this.onFormSubmit} className="PostIt__form">
                    <textarea className="PostIt__textarea" value={this.state.form.text} type='text' name="text" rows='5' cols='22' onChange={this.onFormChange} />
                    <button type="submit">post</button>
                </form>
            </div>
        )
    }
}

export default PostIt