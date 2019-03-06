import React from 'react'
import { Redirect } from 'react-router-dom'
import './SignIn.css'

class SignIn extends React.Component {

    componentDidMount(){
        this.props.changeDisplay("sign-in")
    }

    render(){
        if(this.props.state.loggedIn === true){
            return <Redirect to="Dashboard" />
        }
        else{
            return(
                <div className="SignIn">
                    <form className="Login__form" onChange={this.props.onFormChange} onSubmit={this.props.onFormSubmit}>
                        <h2>Log in to account</h2>
                        <h3>Enter your details below</h3>
                        <label className="Login__label" htmlFor="email">Email</label>
                        <input className="Login__input" type="text" name="email" />
                        <label className="Login__label" htmlFor="password">Password</label>
                        <input className="Login__input" type="password" name="password" />
                        <button className="Login__submit">Log in</button>
                    </form>
                </div>
            )
        }
   }
}

export default SignIn