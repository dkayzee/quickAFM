import React from 'react'
import { Redirect } from 'react-router-dom'
import './NewProject.css'
import axios from 'axios'

class NewProject extends React.Component{
    state = {
        groups : [],
        newGroup: false,
        submitted: false
    }

    getGroup = async () => {
        const groups = await axios('/group')
        this.setState({groups:groups.data})
    }

    componentDidMount(){
        this.getGroup()
    }

    onNewGroup = (e) => {
        this.props.onGroupChange()
        this.setState({newGroup:true})
    }

    onGroupSubmit = (e) => {
        e.preventDefault()
        this.setState({submitted : true})
    }

    render(){

        const groupResults = this.state.groups.map((group, i) => {
            return (
                <div key={i}>  
                    <input 
                        type="radio" 
                        value={group.id} 
                        onChange={this.props.onGroupChange}
                        checked={this.props.state.selectedGroup === group.name}
                        name={group.name}
                        onClick={()=>{console.log(group.id)}}
                    /> 
                    <label htmlFor={group.id} className="NewProject__label">{group.name}</label>
                </div>
            )
        })

        if(this.state.submitted){
            if(this.state.newGroup){
                return <Redirect to='/new-group' />
            }
            else{
                return <Redirect to='whiteboard' />
            }
        }
        return(
            <div className="NewProject">
                <h1 className="NewProject__h1">New Project!</h1>
                <div className='NewProject__groups'>
                        <form onSubmit={this.onGroupSubmit}>
                            <h2>Select your group</h2>
                            {groupResults}
                            <input 
                                type="radio"
                                onChange={this.props.onGroupChange}
                                check={this.props.state.selectedGroup}
                                value={this.props.state.selectedGroup}
                                name={this.props.state.selectedGroup}
                            />
                            <input type="text" onChange={this.onNewGroup} />
                            <button type="submit">Let's Go!</button>
                        </form>
                </div>
            </div>
        )
    }
}

export default NewProject