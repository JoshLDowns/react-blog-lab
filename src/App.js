import React from 'react';
import SideBar from './SideBar';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postsDisplayed: false,
      posts: undefined
    }
  }

  togglePostDisplay = () => {
    this.setState(prevState => {
      return {
        postsDisplayed: !prevState.postsDisplayed
      }
    })
  }

  getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(data => {
        return data.json()
    }).then(jsonObj => {
        this.setState({
            posts: jsonObj
        })
    })
}

  componentDidMount() {
    this.getPosts();
    console.log(this.state.posts)
  }

  render() {

    return (
      <div id='body'>
        <div id="main-container">
          <SideBar togglePostDisplay={this.togglePostDisplay}/>
          {this.state.postsDisplayed && <PostDisplay posts={this.state.posts} />}
        </div>
      </div>
    );

  }
}

function PostDisplay (props) {
  return (
    <div id='post-list'>
      {props.posts ?
      props.posts.map((post) => <div key={post.id} className='post'><h5 >{post.title}</h5><p className='post-body'>{post.body}</p></div>) : "Loading . . ."}
    </div>
  )
}

export default App;