import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import LogIn from './pages/login';
import Profile from './pages/profile';
import MakeBooking from './pages/makebooking';
import ViewBookings from './pages/viewbookings';
import Redeem from './pages/redeem';
import ViewBookingsAdmin from './pages/viewbookingsadmin';
import ViewSingleBookingAdmin from './pages/viewsinglebookingadmin';
import AddService from './pages/addservice';
import Register from './pages/register';

function App() {
  var loggedIn = false
  const logstatus = window.localStorage.getItem("authUser")

  if (logstatus){
    loggedIn = true
  }

  else{
    loggedIn = false
  }

  return (
    <Router>
      <Navbar isUser={loggedIn} isAdmin={false}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={LogIn} />
        <Route path='/profile' component={Profile} />
        <Route path='/makebooking' component={MakeBooking} />
        <Route path='/viewbookings' component={ViewBookings} />
        <Route path='/redeem' component={Redeem} />
        <Route path='/viewbookingsadmin' component={ViewBookingsAdmin} />
        <Route path='/viewsinglebookingadmin' component={ViewSingleBookingAdmin} />
        <Route path='/addservice' component={AddService} />
        <Route path='/register' component={Register} />
      </Switch>
    </Router>
  );
}
  
export default App;
