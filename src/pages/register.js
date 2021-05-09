import React from 'react';
import './register.css';
  
const Register = () => {
  return (
    <div class="page" id="register">
      <form class="modal-content" action="">
        <div class="container">
          <label><b>First Name</b></label>
          <input type="text" placeholder="Enter first name" name="fname" required/>

          <label><b>Last Name</b></label>
          <input type="text" placeholder="Enter last name" name="lname" required/>

          <label><b>Email</b></label>
          <input type="text" placeholder="Enter email" name="email" required/>
          
          <label><b>Phone number</b></label>
          <input type="text" placeholder="Enter number" name="number" required/>

          <label><b>Password</b></label>
          <input type="password" placeholder="Enter password" name="psw" required/>
     
          <label><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat password" name="psw-repeat" required/>
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
     
          <div class="clearfix">
            <button type="button" onClick={event => window.location.href='/'} class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};
  
export default Register;