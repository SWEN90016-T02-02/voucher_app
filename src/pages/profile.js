import React, {Component} from 'react';
import './profile.css'
import photo from '../images/profile_picture.jpg';
import axios from 'axios'

class Profile extends Component{
    constructor(){
        super()
        this.state = {
            password:'',
            new_password:'',
            fullname:window.localStorage.getItem("fn") + " " + window.localStorage.getItem("ln"),
            
        }

        this.changeOldPassword = this.changeOldPassword.bind(this)
        this.changeNewPassword = this.changeNewPassword.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }

    changeOldPassword(e){
        this.setState({
            password:e.target.value
        })
    }

    changeNewPassword(e){
        this.setState({
            new_password:e.target.value
        })
    }

    changePassword(e){
        e.preventDefault()

        const request = {
            password:this.state.password,
            new_password:this.state.new_password
        }

        axios.post('http://localhost:4000/app/changepassword', request)
        .then(response => {
            alert("Successfully Changed you password");
        })
        .catch(err =>{
            alert(err)
          })
        
        window.localStorage.setItem("password", this.state.new_password)
    }

    clearStorage = ()=>{
        window.localStorage.clear()
        window.location = "/"
    }




    render(){
        return (
            <div class="page">
              <div class="body" id="profile">
              <div class="nav" id="profile"><h2>Personal Information</h2></div>
               <div class="a" id="profile">
                <div class="one" id="profile">
                    <input type="text"  onChange={this.changeOldPassword} value={this.state.password} class="one1" id="profile" placeholder="Please enter your old password"/><br/>
                    <input type="text"  onChange={this.changeNewPassword} value={this.state.new_password} class="one2" id="profile" placeholder="Please enter a new password"/><br/>
                    <button class="one3" onClick={this.changePassword} id="profile">Change the password</button>
                </div>
                <div class="two" id="profile">
                    <div class="two1" id="profile"><img  id="profile" src={photo}/> </div>
                    <div class="text1" id="profile">{this.state.fullname}</div>
  
                </div>
                <div class="three" id="profile">
                    <div class="three1" id="profile">
                        <span class="three-image2" id="profile"> </span>
                        <span>Message</span>
                        <button id="profile">0</button>
                    </div>
                    <div class="three1" id="profile" onClick={this.clearStorage}>
                        <span class="three-image4" id="profile"> </span>
                        <span>Log Out</span>
                    </div>
                </div>
            </div>
            </div>
            <div id="change">
                <table>
                    <tr>
                        <th>
                            First name:
                        </th>
                        <th>
                            <input type="text" id="name_pl" placeholder={"  "+window.localStorage.fn}/>
                        </th>   
                        <th>
                            <button id="fn_button">Change</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                             Last name:
                        </th>
                        <th>
                        <input type="text" id="lname_pl" placeholder={"  "+window.localStorage.ln}/>
                        </th>   
                        <th>
                        <button id="ln_button">Change</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                        Phone:
                        </th>
                        <th>
                        <input type="text" id="phone_pl" placeholder={"  "+window.localStorage.phone}/>
                        </th>   
                        <th>
                        <button id="ph_button">Change</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                        Email:
                        </th>
                        <th>
                        <input type="text" id="email_pl" placeholder={"  "+window.localStorage.email}/>
                        </th>   
                        <th>
                        <button id="em_button">Change</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                        Name on invoice:
                        </th>
                        <th>
                        <input type="text" id="name_invoice_pl" placeholder={"  "+window.localStorage.fn}/>
                        </th>   
                        <th>
                        <button id="ni_button">Change</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                        Biller email:
                        </th>
                        <th>
                        <input type="text" id="email_biller_pl" placeholder={"  "+window.localStorage.fn}/>
                        </th>   
                        <th>
                        <button id="em_button">Change</button><br/>
                        </th>
                    </tr>   
                    </table> 
            </div>

            </div>
          );
    }
}
  
export default Profile;