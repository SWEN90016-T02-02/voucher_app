import React from 'react';
import './viewsinglebookingadmin.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios'


const ViewSingleBookingUser = (props) => {

  var bookings = formlist()

  function getdata(){
    const request = {
      email: window.localStorage.getItem("email")+""
    }
    
    axios.post('http://localhost:4000/booking/getuserbooking', request)
      .then(resp =>{
        const len = resp.data.length
        for(var i=0; i<len; i++){
          window.localStorage.setItem(''+i, i) //TODO
          window.localStorage.setItem(""+i+0, resp.data[i].service_type)
          window.localStorage.setItem(""+i+1, resp.data[i].method)
          window.localStorage.setItem(""+i+2, resp.data[i].pickup_date)
          window.localStorage.setItem(""+i+3, resp.data[i].option_message)  
        }
        window.localStorage.setItem("numberofbooking",len)
      })
  }

  function formlist(){
    getdata()
    var bookings = []
    for(var i=0; i<window.localStorage.getItem("numberofbooking"); i++){
      var instance = {
        "id": window.localStorage.getItem(""+i),
        "st": window.localStorage.getItem(""+i+0),
        "method": window.localStorage.getItem(""+i+1),
        "pkd": window.localStorage.getItem(""+i+2),
        "msg": window.localStorage.getItem(""+i+3),
      }

      bookings.push(instance)
    }

    return bookings

  }

  function cancelBooking(id) {
    // Use id to delete in database
    const request = {
      user_email: window.localStorage.getItem("email")+"",
      service_type: window.localStorage.getItem(""+id+0),
      method: window.localStorage.getItem(""+id+1),
      pickup_date: window.localStorage.getItem(""+id+2),
      option_message: window.localStorage.getItem(""+id+3),
    } // TODO
    axios.post('http://localhost:4000/booking/cancelbooking', request)
    .then(resp =>{
      alert("Successfully Cancelled");
      window.location = '/viewbookings/'
    })
    .catch(err =>{
      alert(err)
    })
  }

  const listBookings = bookings.map((d) =>  <li>
                                            Service type: {d.st} <br/>
                                            Delivery type: {d.method} <br/>
                                            Delivery date: {d.pkd} <br/>
                                            Message: {d.msg} <br/>
                                            <ul id="nav">
                                            <li id="reject" ><Link to='/viewbookings/' onClick={() => cancelBooking(d.id)}>Cancel</Link></li>
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