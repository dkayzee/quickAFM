import React from 'react'

class SignIn extends React.Component {
   
    componentDidMount(){
        this.props.changeDisplay("sign-in")
    }
    render(){
        return(
            <div>
                SignIn
            </div>
        )
   }
}

export default SignIn