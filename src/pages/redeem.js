import React, {Component} from 'react';
import './redeem.css';
import logo from '../images/redeem.png';
import axios from 'axios';



class Redeem extends Component{
  constructor(){
    super()
    this.state = {
      code : '',
    }
    this.changeCode = this.changeCode.bind(this)
    this.redeem = this.redeem.bind(this)
  }

  changeCode(e){
    this.setState({
      code:e.target.value
    })
  }

  redeem(e){
    e.preventDefault()

    const request = {
      email:window.localStorage.getItem("email"),
      code:this.state.code
    }
    
    axios.post("http://localhost:4000/voucher/voucherrd/redeem", request)
    .then(resp =>{
      // alert("Successfully Redeemed");
      alert(resp.data.message);
      window.location = '/'
    })
    .catch(err =>{
      alert(err)
    })
  
  }

  render(){
    return (
      <div class="page">
        <div id="imgcomtainer">
            <img src={logo}/>
        </div>
        <div id="redeem">
          <div id="a">
            <input type="text" placeholder="Enter Voucher Code" onChange={this.changeCode} value={this.state.code} name="voucher" required />
          </div>
          <div class="btnContainer">
            <button id="confirm" onClick={this.redeem}>Confirm</button>
            <button id="cancel" onClick={event => window.location.href='/'}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

}
  
  
export default Redeem;