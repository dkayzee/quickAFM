import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

class Header extends React.Component {

  render() {

    if(this.props.display === "register"){
      return (
        <div className="Header">
          <header>
            <h1 className="Header__logo">
              <Link className="logo-link" to="/">Quick AFM</Link>
            </h1>

            <nav>
              <ul className="Header__nav">
                <li className="Header__nav-item"><Link className="Header__nav-link" to="/sign-in">Login</Link></li>
              </ul>
            </nav>
          </header>
        </div>
      )
    }
    else if(this.props.display === 'sign-in'){
      return (
        <div className="Header">
          <header>
            <h1 className="Header__logo"><Link className="logo-link" to="/">Quick AFM</Link></h1>
            <nav>
              <ul className="Header__nav">
                <li className="Header__nav-item"><Link className="Header__nav-link" to="/register">Register</Link></li>
              </ul>
            </nav>
          </header>
        </div>
      )
    }
    else if(this.props.display === 'profile'){
      return (
        <div className="Header">
          <header>
            <h1 className="Header__logo"><Link className="logo-link" to="/">Quick AFM</Link></h1>
            <nav>
              <ul className="Header__nav">
                <li className="Header__nav-item"><Link className="Header__nav-link" to="/profile">Profile</Link></li>
              </ul>
            </nav>
          </header>
        </div>
      )
    }
    else{
      return (
        <div className="Header">
          <header>
            <h1 className="Header__logo"><Link className="logo-link" to="/">Quick AFM</Link></h1>
            <nav>
              <ul className="Header__nav">
                <li className="Header__nav-item"><Link className="Header__nav-link" to="/register">Register</Link></li>
                <li className="Header__nav-item"><Link className="Header__nav-link" to="/sign-in">Login</Link></li>
              </ul>
            </nav>
          </header>
        </div>
      )
    }
  }
}

export default Header