import React from 'react';
import './login.css';
import logo from '../images/logo.png';
  
const LogIn = () => {
  return (
    <div class="page" id="login">
      <form class="modal-content" action="">
        <div class="imgcontainer">
        <img src={logo} alt="Avatar" class="avatar"/>
        </div>
        <div class="container">
          <label><b>Email address:</b></label>
          <input type="text" placeholder="Enter email address" name="uname" required/>	
    
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter password" name="psw" required/>
    
          <button type="submit">Login</button>
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
};
  
export default LogIn;