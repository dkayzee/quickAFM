import React from 'react'

class Register extends React.Component {
    componentDidMount(){
        this.props.changeDisplay("register")
    }

    render(){
        return (
            <div>
                <p>Register</p>
            </div>
        )
    }
}

export default Register