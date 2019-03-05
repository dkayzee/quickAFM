import React from 'react'
import { Redirect } from 'react-router-dom'
import './NewProject.css'
import axios from 'axios'

class NewProject extends React.Component{
    state = {
        groups : [],
        selectedGroup: "",
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

    onGroupChange = (e) => {
        this.setState({
            selectedGroup: e.currentTarget.value
        })
    }

    onNewGroup = (e) => {
        this.setState({selectedGroup: e.target.value})
        this.setState({newGroup:true})
    }

    onGroupSubmit = (e) => {
        e.preventDefault()
        this.setState({submitted : true})
    }

    render(){

        const groupResults = this.state.groups.map((group, i) => {
            console.log(group.name)
            return (
                <div key={i}>  
                    <input 
                        type="radio" 
                        value={group.name} 
                        onChange={this.onGroupChange}
                        checked={this.state.selectedGroup === group.name}
                        name={group.name}
                    /> 
                    <label htmlFor={group.name}>{group.name}</label>
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
                NewProject!
                <div className='NewProject__groups'>
                        <form onSubmit={this.onGroupSubmit}>
                            {groupResults}
                            <input 
                                type="radio"
                                onChange={this.onGroupChange}
                                check={this.state.selectedGroup}
                                value={this.state.selectedGroup}
                                name={this.state.selectedGroup}
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