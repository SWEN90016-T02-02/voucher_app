import React from 'react';
import './viewsinglebookingadmin.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const ViewSingleBookingUser = (props) => {

  const bookings = [{"booking_id":"1", "service_type":"flowers", "delivery_type":"on-site", "date":"1-6-2021", "message":"test message"},
                    {"booking_id":"2", "service_type":"flowers", "delivery_type":"on-site", "date":"1-6-2021", "message":"test message"}
                    ];

  const listBookings = bookings.map((d) =>  <li>
                                            Booking ID: {d.booking_id} <br/>
                                            Service type: {d.service_type} <br/>
                                            Delivery type: {d.delivery_type} <br/>
                                            Delivery date: {d.date} <br/>
                                            Message: {d.message} <br/>
                                            <ul id="nav">
                                            <li id="reject"> <Link to='/viewbookings/'>Cancel</Link></li>
                                            </ul>
                                            <br/>
                                            </li>);

return (
<div class="page">
<h1 >Viewing current bookings</h1>
<ul id="listBookings">{listBookings}</ul>
</div>
);
};
  
export default ViewSingleBookingUser;