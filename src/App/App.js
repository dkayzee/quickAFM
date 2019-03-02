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
  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route path='/' exact render={props=>{
              return <Home loggedIn={this.state.loggedIn} display={this.state.display}/>
            }} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/register' component={Register} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
