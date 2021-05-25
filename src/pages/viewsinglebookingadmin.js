import React from 'react';
import './viewsinglebookingadmin.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
  



const ViewSingleBookingAdmin = (props) => {

    function rejectOp() {
        const request = {
          user_email: props.location.state.user_email,
          service_type: props.location.state.service_type,
          pickup_date: props.location.state.pickup_date,
          method: props.location.state.method,
          phone_number: props.location.state.phone_number
        } 
        axios.post('http://localhost:4000/booking/rejectbooking', request)
        .then(resp =>{
          alert("Successfully Rejected");
          window.location = '/viewbookingsadmin/'
        })
        .catch(err =>{
          alert(err)
        })
    }

    function acceptOp(){
        const request = {
            user_email: props.location.state.user_email,
            service_type: props.location.state.service_type,
            pickup_date: props.location.state.pickup_date,
          } 
          axios.post('http://localhost:4000/booking/acceptbooking', request)
          .then(resp =>{
            alert("Successfully Accepted");
            window.location = '/viewbookingsadmin/'
          })
          .catch(err =>{
            alert(err)
          })
    }

    return (
        <div class="page">
            <h1 >Viewing booking</h1>
            <ul id="bookingDetail">
                <li>
                    User Email: {props.location.state.user_email}
                </li>
                <li>
                    Service Type: {props.location.state.service_type}
                </li>
                <li>
                    Customer Phone Number: {props.location.state.phone_number}
                </li>
                <li>
                    Customer Pick-up Method: {props.location.state.method}
                </li>
                <li>
                    Customer Pick-up Date: {props.location.state.pickup_date}
                </li>

                <li>
                    Booking Established Time: {props.location.state.date}
                </li>
                
            </ul>
            <span/>
            <ul id="nav">
                <li id="back"> <Link to='/viewbookingsadmin/'>Back</Link></li>
                <li id="reject"> <Link to='/viewbookingsadmin/' onClick={() => rejectOp()}>Reject</Link></li>
                <li id="accept"> <Link to='/viewbookingsadmin/' onClick={() => acceptOp()}>Accept</Link></li>
            </ul>
        </div>
    );
};
  
export default ViewSingleBookingAdmin;