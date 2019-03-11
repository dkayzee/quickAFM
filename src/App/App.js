import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import axios from 'axios'

import Home from '../Components/Home/Home'
import SignIn from '../Components/SignIn/SignIn'
import Register from '../Components/Register/Register'
import Header from '../Components/Header/Header';
import Dashboard from '../Components/Dashboard/Dashboard'
import NewProject from '../Components/NewProject/NewProject'
import WhiteBoard from '../Components/WhiteBoard/WhiteBoard'
import PostIt from '../Components/PostIt/PostIt'

class App extends Component {
  state = {
    loggedIn : false,
    display : 'home',
    user : null,
    selectedGroupId : '',
    selectedGroup: '',
    form: {
      email: '',
      password: ''
    }
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

  onLoginChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState(prevState => {
      prevState.form[name] = value
      return prevState
    })
  }

  onLoginSubmit = async(evt) => {
    evt.preventDefault()
    try {
        const res = await axios.post('/users/login', this.state.form)
        this.setState({loggedIn: res.data.loggedIn, user:res.data.user})
    } catch(e){
        console.log(e.message)
    }
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
              return <SignIn 
                changeDisplay={this.changeDisplay}
                onFormChange={this.onLoginChange}
                onFormSubmit={this.onLoginSubmit}
                state={this.state}
                />
            }} />
            <Route path='/register'  exact render={props=>{
              return <Register changeDisplay={this.changeDisplay}/>
            }} />
            <Route path='/dashboard' exact render={props=>{
              return <Dashboard changeDisplay={this.changeDisplay} />
            }}/>
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
            <Route path='/postIt' component={PostIt} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
