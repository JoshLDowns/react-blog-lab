import React from 'react'
import Greeting from './Greeting'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: undefined,
            greeting: 'Hello!'
        }
    }
    componentDidMount(prevProps, prevState) {
        this.getUserData()
    }
    getUserData = () => {
        fetch('https://jsonplaceholder.typicode.com/users').then(data => {
            return data.json()
        }).then(jsonObj => {
            this.setState({
                userData: jsonObj
            })
        })
    }

    changeGreeting = (event) => {
        event.preventDefault()
        console.log(event.target)
        this.setState({
            greeting: event.target.newGreeting.value
        })
    }

    render() {
        return (
            <div className="head">
                <Greeting changeGreeting={this.changeGreeting} greeting={this.state.greeting} />
                <h3>{this.state.userData ? this.state.userData[this.props.id].name : "Loading . . ."}</h3>
                <h5>{this.state.userData ? this.state.userData[this.props.id].email : "Loading . . ."}</h5>
            </div>
        )
    }
}
export default Header