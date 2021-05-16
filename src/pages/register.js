import React, {Component} from 'react';
import './register.css';
import axios from 'axios'


class Register extends Component {
      constructor(){
        super()
        this.state = {
          firstName:'',
          lastName:'',
          email:'',
          phone_number:'',
          password:'',
        }

        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }

      changeFirstName(event){
        this.setState({
          firstName:event.target.value
        })
      }

      changeLastName(event){
        this.setState({
          lastName:event.target.value
        })
      }

      changeEmail(event){
        this.setState({
          email:event.target.value
        })
      }

      changePhone(event){
        this.setState({
          phone_number:event.target.value
        })
      }

      changePassword(event){
        this.setState({
          password:event.target.value
        })
      }
      
      onSubmit(event){
        event.preventDefault()

        const registered = {
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          phone_number:this.state.phone_number,
          user_id:1,
          email:this.state.email,
          password:this.state.password
        }

        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))

        window.location = "/"

        
      }

      render(){
        return (
          <div class="page" id="register">
            <form class="modal-content">
              <div class="container">
                <label><b>First Name</b></label>
                <input type="text" 
                placeholder="Enter first name" 
                onChange={this.changeFirstName} 
                value={this.state.firstName} 
                name="fname" required/>
      
                <label><b>Last Name</b></label>
                <input type="text" 
                placeholder="Enter last name" 
                onChange={this.changeLastName} 
                value={this.state.lastName} 
                name="lname" required/>
      
                <label><b>Email</b></label>
                <input type="text" 
                placeholder="Enter email" 
                onChange={this.changeEmail} 
                value={this.state.email} 
                name="email" required/>
                
                <label><b>Phone number</b></label>
                <input type="text" placeholder="Enter number" onChange={this.changePhone} value={this.state.phone_number}  name="number" required/>
      
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter password" onChange={this.changePassword} value={this.state.password} name="psw" required/>
           
                <label><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat password" name="psw-repeat" required/>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
           
                <div class="clearfix">
                  <button type="button" onClick={event => window.location.href='/'} class="cancelbtn">Cancel</button>
                  <button type="submit" onClick={this.onSubmit} class="signupbtn">Sign Up</button>
                </div>
              </div>
            </form>
          </div>
        );
      }

}


export default Register;