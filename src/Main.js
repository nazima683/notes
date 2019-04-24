import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp"; 
 
class Main extends Component {
  render() {
    return (
        
        
        <HashRouter>
        <div>
        <div style={{ backgroundImage: 'url(/notes.jpg)' }}>...</div>
          <h1>NOTES</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/SignIn">Sign In</NavLink></li>
            <li><NavLink to="/SignUp">Sign Up</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Signin" component={SignIn}/>
            <Route path="/SignUp" component={SignUp}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;