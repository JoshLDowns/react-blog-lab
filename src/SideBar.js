import React from 'react'

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: undefined,  
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

    render() {
        return (
            <div id='side-bar'>
                {this.state.userData ? this.state.userData.map((user) => <h3 onClick={this.props.togglePostDisplay} key={user.id}>{user.name}</h3>) : "Loading . . ."}
            </div>
        )
    }
}
export default SideBar