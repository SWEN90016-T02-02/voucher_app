import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './viewbookingsadmin.css';
import axios from 'axios';
  
const ViewBookingsAdmin = () => {
  
  var bookings = formlist()

  function getdata(){
    axios.get('http://localhost:4000/booking/adminbooking')
      .then(resp =>{
        
        const len = resp.data.length

        for (var i=0; i<len; i++){
          window.localStorage.setItem(""+i+0, resp.data[i].user_email)
          window.localStorage.setItem(""+i+1, resp.data[i].phone_number)
          window.localStorage.setItem(""+i+2, resp.data[i].service_type)
          window.localStorage.setItem(""+i+3, resp.data[i].method)
          window.localStorage.setItem(""+i+4, resp.data[i].pickup_date)
          window.localStorage.setItem(""+i+5, resp.data[i].date)  
        }

        window.localStorage.setItem("numberofbooking",len)
      })
  }


  function formlist(){

    getdata()
    var bookings = []

    for(var i=0; i<window.localStorage.getItem("numberofbooking"); i++){
      var instance = {
        "email": window.localStorage.getItem(""+i+0),
        "pn": window.localStorage.getItem(""+i+1),
        "st": window.localStorage.getItem(""+i+2),
        "method": window.localStorage.getItem(""+i+3),
        "pkd": window.localStorage.getItem(""+i+4),
        "date": window.localStorage.getItem(""+i+5),
      }

      bookings.push(instance)
    }

    return bookings
  }

  

  const listBookings = bookings.map((d) =>  <li>
                              <Link to={{
                                pathname:'/viewsinglebookingadmin/',
                                state:{user_email: d.email,
                                       service_type: d.st,
                                       pickup_date: d.pkd,
                                       date: d.date,
                                       method: d.method,
                                       phone_number: d.pn

                                }

                              }}>
                              User: {d.email} | Service type: {d.st} | Establish Time: {d.date}
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