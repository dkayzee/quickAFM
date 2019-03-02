import React from 'react'

import Header from '../Header/Header'

class Home extends React.Component {

    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div>
                <Header />
            </div>
        )
    }
}

export default Home