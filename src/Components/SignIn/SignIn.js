import React from 'react'

import Header from '../Header/Header'

class SignIn extends React.Component {
   
    componentDidMount(){
        this.props.changeDisplay("sign-in")
    }
    render(){
        return(
            <div>
                <Header info={this.props}/>
                SignIn
            </div>
        )
   }
}

export default SignIn