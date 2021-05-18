import React from 'react';
import ReactRoundedImage from "react-rounded-image";
import logo from '../../images/uom.png';
import generic from '../../images/generic.jpg';

function Navbar(props) {
    const clearStorage = ()=>{
        window.localStorage.clear()
        window.location = "/"
    }

    if (props.isAdmin == true) {
        return (
            <div className="sideNavigationBar">
                <ul>
                    <li id="logo">
                        <a href="/">
                            <ReactRoundedImage image={logo} imageWidth="150" imageHeight="150"/>
                            Admin
                        </a>
                    </li>
                    <li><a href="/viewbookingsadmin">View bookings</a></li>
                    <li><a href="/addservice">Add service type</a></li>
                </ul>
                <div id="logout">log out</div>
            </div>
        );
    } else if (props.isUser == true) {
        return (
            <div className="sideNavigationBar">
                <ul>
                    <li id="logo">
                        <a href="/">
                            <ReactRoundedImage image={generic} imageWidth="150" imageHeight="150"/>
                            {window.localStorage.fn} {window.localStorage.ln}
                        </a>
                    </li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/makebooking">Make a booking</a></li>
                    <li><a href="/viewbookings">View bookings</a></li>
                    <li><a href="/redeem">Redeem code</a></li>
                </ul>
                <button onClick={clearStorage} id="logout">log out</button>
            </div>
      );
    } else {
        return (
            <div className="sideNavigationBar">
                <ul>
                    <li id="logo">
                        <a href="/">
                            <ReactRoundedImage image={logo} imageWidth="150" imageHeight="150"/>
                        </a>
                    </li>
                    <li><a href="/login">Log In</a></li>
                    <li><a href="/register">Sign Up</a></li>
                </ul>
            </div>
      ); 
    }

};
  
export default Navbar;