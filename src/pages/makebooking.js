import React from 'react';
import './makebooking.css';
import logo from '../images/logo.png';
  
const MakeBooking = () => {
  return (
    <div class="page">
      <div id="res_form">
        <div id="logo">
          <img src={logo} />
        </div>
        <form method="post">
          <div id="a">
            Name
				<input type="text" placeholder="Enter Username" name="uname" required />
          </div>
          <div id="a">
            Email
				<input type="text" placeholder="Enter Email" name="email" required />
          </div>
          <div id="a">
            Phone number
				<input type="text" placeholder="Enter Number" name="number" required />
          </div>
          <div id="a">
            Voucher Service Type
				<select name="type">
              <option selected="selected">Please Choose</option>
              <option value="flowers">flowers</option>
              <option value="chocolatebox">chocolatebox</option>
              <option value="teaparty">teaparty</option>
              <option value="cheeseplatter">cheeseplatter</option>
              <option value="coffees10">coffees10</option>
              <option value="breakfast">breakfast</option>
              <option value="lunch">lunch</option>
              <option value="meatmeal">meatmeal</option>
              <option value="fishmeal">fishmeal</option>
              <option value="vegmeal">vegmeal</option>
              <option value="bakerygoods">bakerygoods</option>
              <option value="hairstyle">hairstyle</option>
            </select>
          </div>
          <div id="a">
            Pickup method
				<select name="type">
              <option selected="selected">Please Choose</option>
              <option value="local delivery to the MYD offices">local delivery to the MYD offices</option>
              <option value="pick-up from the service">pick-up from the service</option>
            </select>
          </div>
          <div id="a">
            Select a date and time for the Voucher Booking service.
				<input type="date" name="date" placeholder="" required />
          </div>
          <div id="bt">
            <input id="confirm" type="submit" value="Confirm" />
            <input id="reset" type="reset" value="Reset" />
          </div>
        </form>
      </div>
    </div>
  );
};
  
export default MakeBooking;