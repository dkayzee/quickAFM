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
    display : 'home',
    user : 'daniel',
    selectedGroupId : '',
    selectedGroup: ''
  }

  changeDisplay = (display) => {
    this.setState({display})
  }

  onGroupChange = (e) => {
    this.setState({
      selectedGroupId: e.currentTarget.value,
      selectedGroup: e.currentTarget.name
    })
    console.log(this.state.selectedGroup + this.state.selectedGroupId)
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
            <Route path='/new-board' exact render={props=>{
              return <NewProject 
                onGroupChange={this.onGroupChange}
                state={this.state}  
              />
            }} />
            <Route path='/whiteboard' exact render={props=>{
              return <WhiteBoard 
                user={this.state.user}
                group={this.state.selectedGroup}
                groupId={this.state.selectedGroupId} />
            }} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
