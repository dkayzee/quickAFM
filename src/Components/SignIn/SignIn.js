import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import './SignIn.css'

class SignIn extends React.Component {
    state = {
        form: {
            email: '',
            password: '',
        },
        user: null,
        loggedIn: false
    }

    componentDidMount(){
        this.props.changeDisplay("sign-in")
    }

    onFormChange = (evt) => {
        const name = evt.target.name
        const value = evt.target.value
        this.setState(prevState => {
            prevState.form[name] = value
            return prevState
        })
    }

    onFormSubmit = async(evt) => {
        evt.preventDefault()
        try {
            const res = await axios.post('/users/login', this.state.form)
            this.setState({loggedIn: res.data.loggedIn})
        } catch(e){
            console.log(e.message)
        }
    }

    render(){
        if(this.state.loggedIn === true){
            return <Redirect to="Dashboard" />
        }
        else{
            return(
                <div className="SignIn">
                    <form className="Login__form" onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
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