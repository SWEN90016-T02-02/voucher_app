import React, {Component} from 'react';
import './login.css';
import logo from '../images/logo.png';
import axios from 'axios';


class LogIn extends Component {
      constructor(){
        super()
        this.state = {
          email:'',
          password:'',
        }

        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.login = this.login.bind(this)
      }
      
    
    changeEmail(event){
      this.setState({
        email:event.target.value
      })
    }

    changePassword(event){
      this.setState({
        password:event.target.value
      })
    }


    login(event){
      event.preventDefault()

      const request = {
        email:this.state.email,
        password:this.state.password
      }
      
      axios.post('http://localhost:4000/app/signin',request)
      .then(resp =>{
        alert("Login Success");
        window.localStorage.setItem("authUser", true);
        window.localStorage.setItem("fn", resp.data.first_name);
        window.localStorage.setItem("ln", resp.data.last_name);
        window.localStorage.setItem("email", resp.data.email);
        window.localStorage.setItem("admin", resp.data.isadmin);
        window.location = '/'
      })
      .catch(err =>{
        alert(err)
      })

    }

    render(){
      return (
        <div class="page" id="login">
          <form class="modal-content" action="">
            <div class="imgcontainer">
            <img src={logo} alt="Avatar" class="avatar"/>
            </div>
            <div class="container">
              <label><b>Email address:</b></label>
              <input type="text" placeholder="Enter email address" onChange={this.changeEmail} 
                value={this.state.email} name="uname" required/>	
        
              <label><b>Password</b></label>
              <input type="password" onChange={this.changePassword} 
                value={this.state.password} placeholder="Enter password" name="psw" required/>
        
              <button type="submit" onClick={this.login}>Login</button>
              <button type="submit" onClick={event => window.location.href='/register'}>Register</button>
              <input type="checkbox"/> Remember me
    
              <div class="container" id="f1">
                 <button type="button" onClick={event => window.location.href='/'} class="cancelbtn">Cancel</button>
                 <span class="psw"><a href="#">Forgot password?</a></span>
              </div>
    
            </div>
          </form>
        </div>
      );
    }

}
  
  
export default LogIn;