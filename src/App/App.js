import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from '../Components/Home/Home'
import SignIn from '../Components/SignIn/SignIn'
import Register from '../Components/Register/Register'
import Header from '../Components/Header/Header';
import Dashboard from '../Components/Dashboard/Dashboard'
import NewProject from '../Components/NewProject/NewProject'
import WhiteBoard from '../Components/WhiteBoard/WhiteBoard'

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
        <Header display={this.state.display} />
        <main>
          <Switch>
            <Route path='/' exact render={props=>{
              return <Home changeDisplay={this.changeDisplay}/>
            }} />
            <Route path='/sign-in' exact render={props=>{
              return <SignIn changeDisplay={this.changeDisplay}/>
            }} />
            <Route path='/register'  exact render={props=>{
              return <Register changeDisplay={this.changeDisplay}/>
            }} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/new-board' component={NewProject} />
            <Route path='/whiteboard' component={WhiteBoard} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
