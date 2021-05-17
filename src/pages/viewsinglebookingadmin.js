import React from 'react';
import './viewsinglebookingadmin.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
  
function getBookingDetails(props) {
    return {"booking_id":props.location.state.bookingID,
            "user_id":"user_1",
            "service_type":"flowers",
            "delivery_type":"On-site",
            "date":"1-6-2021",
            "message":"optional message",
            "name":"John Smith",
            "phone_number": "12345678",
            "email_address":"js@email.com"};
};

const ViewSingleBookingAdmin = (props) => {

    const bookingDetails = getBookingDetails(props);

    return (
        <div class="page">
            <h1 >Viewing booking</h1>
            <ul id="bookingDetail">
                <li>
                    Booking ID: {bookingDetails.booking_id}
                </li>
                <li>
                    User ID: {bookingDetails.user_id}
                </li>
                <li>
                    Customer name: {bookingDetails.name}
                </li>
                <li>
                    Customer phone number: {bookingDetails.phone_number}
                </li>
                <li>
                    Customer email address: {bookingDetails.email_address}
                </li>
                <li>
                    Service type: {bookingDetails.service_type}
                </li>
                <li>
                    Delivery type: {bookingDetails.delivery_type}
                </li>
                <li>
                    Delivery date: {bookingDetails.date}
                </li>
                <li>
                    Message: {bookingDetails.message}
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