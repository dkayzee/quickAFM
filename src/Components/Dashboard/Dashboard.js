import React from 'react'
import './Dashboard.css'
import axios from 'axios';
import {Link} from 'react-router-dom'

class Dashboard extends React.Component {
    state = {
        boards : []
    }

    getBoard = async () => {
        const res = await axios.get('/board')
        this.setState({boards : res.data})
    }

    componentDidMount(){
        this.getBoard()
    }
    render(){
        console.log(this.state.boards)
        const boards = this.state.boards.map((board, i) => {
            return <div className="Dashboard__boards" key={i}>{board.name}</div>
        })
        return(
            <div className="Dashboard">
                Dashboard
                <div className="Dashboard__container">
                    <div className="Dashboard__boards"><Link to="/new-board">Start a New Board!</Link></div>
                    {boards}
                </div>
                
            </div>
        )
    }
}

export default Dashboard