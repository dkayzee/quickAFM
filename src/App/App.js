import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from '../Components/Home/Home'
import SignIn from '../Components/SignIn/SignIn'
import Register from '../Components/Register/Register'

class App extends Component {
  state = {
    loggedIn : false,
    display : 'home'
  }

  changeDisplay = (display) => {
    this.setState({display})
  }

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route path='/' exact render={props=>{
              return <Home loggedIn={this.state.loggedIn} display={this.state.display} changeDisplay={this.changeDisplay}/>
            }} />
            <Route path='/sign-in' exact render={props=>{
              return <SignIn loggedIn={this.state.loggedIn} display={this.state.display} changeDisplay={this.changeDisplay}/>
            }} />
            <Route path='/register'  exact render={props=>{
              return <Register loggedIn={this.state.loggedIn} display={this.state.display} changeDisplay={this.changeDisplay}/>
            }} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
