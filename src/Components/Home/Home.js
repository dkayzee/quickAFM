import React from 'react'
import './Home.css'

class Home extends React.Component {

    componentDidMount(){
        this.props.changeDisplay("home")
    }

    render(){
        return(
            <div className="Home">
                <h3 className="Home__text">A quick, fun way to map your group's thoughts without Postits</h3>
                <img className="Home__img" alt='connected minds' src="https://static.makeuseof.com/wp-content/uploads/2015/11/mind-maps-use-670x335.jpg"/>
            </div>
        )
    }
}

export default Home