import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class SignUp extends React.Component{
    state={
        firstName:'',
        lastName:'',
        username:'',
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
                     
              <h2>Sign Up</h2><br/><br/>
               <FormGroup> 
                <Label for="First Name">First Name</Label>
                <Input
                name='firstName' 
                placeholder='First name' 
                value={this.state.firstName} 
                onChange={e=>this.change(e)}></Input> 
              </FormGroup>
              
              <FormGroup>
                <Label for="last Name">Last Name</Label>
                <Input 
                name='lastName'
                placeholder='Last name' 
                value={this.state.lastName} 
                onChange={e=>this.change(e)}></Input> 
              </FormGroup>
                
              <FormGroup>  
                <Label for="username">Username</Label> 
                <Input 
                name='username'
                placeholder='username' 
                value={this.state.username} 
                onChange={e=>this.change(e)}></Input>
              </FormGroup>

             <FormGroup>
                <Label for="email">email</Label>  
                <Input 
                name='email'
                type="email"
                placeholder='email' 
                value={this.state.email} 
                onChange={e=>this.change(e)}></Input>
            </FormGroup> 

            <FormGroup>
                <Label for="password">password</Label>
                <Input 
                type="password"
                name='password'
                placeholder='password' 
                value={this.state.password} 
                onChange={e=>this.change(e)}></Input>
             </FormGroup>
              <Button  color="success" onClick={e=>this.onSubmit(e)}>Submit</Button>
              
            </Form>
        );
    }
}