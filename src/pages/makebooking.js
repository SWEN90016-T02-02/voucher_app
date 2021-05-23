import React, {Component} from 'react';
import './makebooking.css';
import logo from '../images/logo.png';
import axios from 'axios';

class MakeBooking extends Component{
  constructor(){
    super()
    this.state = {
      user_email : '',
      phone_number:'',
      service_type: '',
      method: '',
      pickup_date:'',
      option_message:'',
    }

    this.changeService = this.changeService.bind(this)
    this.changeMethod = this.changeMethod.bind(this)
    this.changeDate = this.changeDate.bind(this)
    this.changeMessage = this.changeMessage.bind(this)
    this.makeBooking = this.makeBooking.bind(this)
  }

  changeService(e){
    this.setState({
      service_type:e.target.value
    })
  }

  changeMethod(e){
    this.setState({
      method:e.target.value
    })
  }

  changeDate(e){
    this.setState({
      pickup_date:e.target.value
    })
  }

  changeMessage(e){
    this.setState({
      option_message:e.target.value
    })
  }


  makeBooking(e){
    e.preventDefault()

    const request = {
      user_email:window.localStorage.getItem("email"),
      phone_number:window.localStorage.getItem("phone"),
      service_type: this.state.service_type,
      method: this.state.method,
      pickup_date:this.state.pickup_date,
      option_message:this.state.option_message
    }

    axios.post("http://localhost:4000/booking/makebooking", request)
    .then(resp =>{
      alert("Successfully Booked");
      // window.location = '/'
    })
    .catch(err =>{
      alert(err)
    })

  }

  render(){
    
    return (
      <div class="page">
        <div id="res_form">
          <div id="logo">
            <img src={logo} />
          </div>
          <form method="post">
            <div id="a">
            <label><b>Voucher Service Type</b></label>
          <select name="type" onChange={this.changeService} value={this.state.service_type}>
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
            <label><b>Pickup method</b></label>
          <select name="type" onChange={this.changeMethod} value={this.state.method}>
                <option selected="selected">Please Choose</option>
                <option value="local delivery to the MYD offices">local delivery to the MYD offices</option>
                <option value="pick-up from the service">pick-up from the service</option>
              </select>
            </div>
            <div id="a">
            <label><b>Select a date</b></label>
          <input type="date" name="date" placeholder="" onChange={this.changeDate} value={this.state.pickup_date} required />
            </div>
            <div id="a">
              <label><b>Message</b></label>
          <input type="text" placeholder="Enter Message" onChange={this.changeMessage} value={this.state.option_message} name="message" option />
            </div>
            <div id="bt">
            <button id="cancel" type="button" onClick={event => window.location.href='/'} class="cancelbtn">Cancel</button>
            <button id="confirm" type="confirm" onClick={this.makeBooking} class="confirmbt">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    );
  }



}
  
export default MakeBooking;