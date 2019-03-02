import React from 'react'

import Header from '../Header/Header'

class Register extends React.Component {
    componentDidMount(){
        this.props.changeDisplay("register")
    }

    render(){
        return (
            <div>
                <Header info={this.props}/>
                <p>Register</p>
            </div>
        )
    }
}

export default Register