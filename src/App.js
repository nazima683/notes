import React, { Component } from 'react';

import {BrowserRouter,Switch,Route} from 'react-router-dom'
import SignUp from './SignUp';
import SignIn from  './SignIn';

class App extends Component {
  onSubmit=(fields)=>{
    console.log("App comp got:",fields);

  };

  render() {
    return (
      <BrowserRouter>
      
      <div className="App">
        <Switch>
       <SignUp onSubmit={fields=>this.UNSAFE_componentWillMount.onSubmit(fields)}/>
       <SignIn onSubmit={fields=>this.UNSAFE_componentWillMount.onSubmit(fields)}/>
       
       </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
