import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './viewbookingsadmin.css';
  
const ViewBookingsAdmin = () => {

  const bookings = [{"booking_id":"1", "user_id":"user_1", "service_type":"flowers", "date":"1-6-2021"},
                    {"booking_id":"2", "user_id":"user_2", "service_type":"lunch", "date":"5-6-2021"}
                   ];
  const listBookings = bookings.map((d) =>  <li>
                                            <Link to={{
                                              pathname:'/viewsinglebookingadmin/',
                                              state:{bookingID: d.booking_id}
                                            }}>
                                            User ID: {d.user_id} | Service type: {d.service_type} | Delivery date: {d.date}
                                            </Link>
                                            </li>);

  return (
    <div class="page">
      <h1 >Viewing current bookings</h1>
      <ul id="listBookings">{listBookings}</ul>
    </div>
  );
};
  
export default ViewBookingsAdmin;