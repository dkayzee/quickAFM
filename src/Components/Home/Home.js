import React from 'react'

import Header from '../Header/Header'

class Home extends React.Component {

    componentDidMount(){
        this.props.changeDisplay("home")
    }

    render(){
        return(
            <div>
                <Header info={this.props}/>
            </div>
        )
    }
}

export default Home