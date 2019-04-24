import React from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';


export default class SignIn extends React.Component{
    state={
        
        
        email:'',
        password:'',
    };
    change=e=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    };
    onSubmit= e=> {
        e.preventDefault();
        this.props.onSubmit(this.state);
        
    };
    
    render(){
        return(

              <Form>        
              <h2>Sign In</h2><br/><br/>
              
              <FormGroup>
              <Label for="email">email</Label>
              <Input 
              name='email'
              placeholder='email'
              type='email' 
              value={this.state.email} 
              onChange={e=>this.change(e)}></Input>
              </FormGroup>

              <FormGroup>
              <Label for="password">password</Label>
              <Input 
              name='password'
              type='password'
              placeholder='password' 
              value={this.state.password} 
              onChange={e=>this.change(e)}></Input>
               </FormGroup>
              <Button  color="success" onClick={e=>this.onSubmit(e)}>Submit</Button>
              
  
            </Form>
        );
    }
}