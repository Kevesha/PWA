import React, { Component } from 'react';
//import imdb = require('imdb');
import './view/css/bootstrap.css';
import './view/css/main.css';
import './view/css/font-awesome.css';

class Game extends Component{
  render(){

  }
}
const Welcome = ({user})=> {
    return (
      <div className="App">
         <header className="App-header">
         <h1 className="display-4">Welcome {user.username}<i className="fa fa-smile-o" aria-hidden="true"></i></h1>
         <p className="h6">We are just waiting for a users to join.</p>
        </header>
      </div>
    )
  }
  
  class LoginForm extends Component {
      handleSignIn(e) {
      e.preventDefault()
      let username = this.refs.username.value
      this.props.onSignIn(username)
    }
    
    render() {
      return (
         <div className="App">
         <header className="App-header">
           <div className="col-sm-3 col-md-6" >
             <h1 className="display-4">Welcome to the Trivia App<i class="fa fa-video-camera" aria-hidden="true"></i></h1>
             <input type="text" className="form-control form-rounded text-center" ref="username" placeholder="What's your name" />
             <br/>
             <p className="h6">Click below to join the game.<i className="fa fa-gamepad" aria-hidden="true"></i> </p>
             <button type="button" className="col-6 btn btn-info form-rounded" onClick={this.handleSignIn.bind(this)}>Join</button>
           </div>
         </header>
       </div>
      )
    }
  }

  class App extends Component {
    constructor(props) {
      super(props)
      this.state = { user: null }
    }
    signIn(username) {
      // This is where you would call Firebase, an API etc...
      // calling setState will re-render the entire app (efficiently!)
      this.setState({
        user: {
          username,
        }});
    }
    
    render() {
      return (
        <div>
          { 
            (this.state.user) ? 
            <Welcome user={this.state.user}/> :
            <LoginForm  onSignIn={this.signIn.bind(this)} />
          }
        </div>
      )
    }
  }
export default App;