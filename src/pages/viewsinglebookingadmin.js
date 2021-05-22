import React from 'react';
import './viewsinglebookingadmin.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
  

const ViewSingleBookingAdmin = (props) => {

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
                <li id="reject"> <Link to='/viewbookingsadmin/'>Reject</Link></li>
                <li id="accept"> <Link to='/viewbookingsadmin/'>Accept</Link></li>
            </ul>
        </div>
    );
};
  
export default ViewSingleBookingAdmin;