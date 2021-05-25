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
            first_name:'',
            last_name:'',
            email:'',
            phone_number:'',
            name_on_invoice:'',
            biller_email:'',
        }

        this.changeOldPassword = this.changeOldPassword.bind(this)
        this.changeNewPassword = this.changeNewPassword.bind(this)
        this.changeFn = this.changeFn.bind(this)
        this.changeLn = this.changeLn.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.changeNOI = this.changeNOI.bind(this)
        this.changeBmail = this.changeBmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.fnOnChange = this.fnOnChange.bind(this)
        this.lnOnChange = this.lnOnChange.bind(this)
        this.emialOnChange = this.emialOnChange.bind(this)
        this.phoneOnChange = this.phoneOnChange.bind(this)
        this.NOIonChange = this.NOIonChange.bind(this)
        this.bmailOnChange = this.bmailOnChange.bind(this)

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

    changeFn(e){
        this.setState({
            first_name:e.target.value
        })
    }
    
    changeLn(e){
        this.setState({
            last_name:e.target.value
          })
    }

    changeEmail(e){
        this.setState({
          email:e.target.value
        })
    }

    changePhone(e){
        this.setState({
          phone_number:e.target.value
        })
    }

    changeNOI(e){
        this.setState({
          name_on_invoice:e.target.value
        })
    }
    
    changeBmail(e){
        this.setState({
          biller_email:e.target.value
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

    fnOnChange(e){
        e.preventDefault()
        
        const request = {
            email:window.localStorage.getItem("email"),
            first_name:this.state.first_name,
        }
        axios.post('http://localhost:4000/app/changefn', request)
        .then(response => {
            alert("Successfully Changed your first name");
        })
        .catch(err =>{
            alert(err)
          })
        
        window.localStorage.setItem("fn", this.state.first_name)
    }

    lnOnChange(e){
        e.preventDefault()
        
        const request = {
            email:window.localStorage.getItem("email"),
            last_name:this.state.last_name,
        }
        axios.post('http://localhost:4000/app/changeln', request)
        .then(response => {
            alert("Successfully Changed your last name");
        })
        .catch(err =>{
            alert(err)
          })
        
        window.localStorage.setItem("ln", this.state.last_name)
    }

    phoneOnChange(e){
        e.preventDefault()
        
        const request = {
            email:window.localStorage.getItem("email"),
            phone_number:this.state.phone_number,
        }
        axios.post('http://localhost:4000/app/changephone', request)
        .then(response => {
            alert("Successfully Changed your phone number");
        })
        .catch(err =>{
            alert(err)
          })
        
        window.localStorage.setItem("phone", this.state.phone_number)
    }

    emialOnChange(e){
        e.preventDefault()
        
        const request = {
            old_email:window.localStorage.getItem("email"),
            email:this.state.email,
        }
        axios.post('http://localhost:4000/app/changeemail', request)
        .then(response => {
            alert("Successfully Changed your email");
        })
        .catch(err =>{
            alert(err)
          })
        
        window.localStorage.setItem("email", this.state.email)
    }

    NOIonChange(e){
        e.preventDefault()
        
        const request = {
            email:window.localStorage.getItem("email"),
            name_on_invoice:this.state.name_on_invoice,
        }
        axios.post('http://localhost:4000/app/changeNOI', request)
        .then(response => {
            alert("Successfully Changed your name on invoice");
        })
        .catch(err =>{
            alert(err)
          })
        
        window.localStorage.setItem("noi", this.state.name_on_invoice)
    }

    bmailOnChange(e){
        e.preventDefault()
        
        const request = {
            email:window.localStorage.getItem("email"),
            biller_email:this.state.biller_email,
        }
        axios.post('http://localhost:4000/app/changebmail', request)
        .then(response => {
            alert("Successfully Changed your biller email");
        })
        .catch(err =>{
            alert(err)
          })
        
        window.localStorage.setItem("bmail", this.state.biller_email)
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
                            <input type="text" id="name_pl" onChange={this.changeFn} value={this.state.first_name} placeholder={"  "+window.localStorage.fn}/>
                        </th>   
                        <th>
                            <button id="fn_button" onClick={this.fnOnChange}>Change</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                             Last name:
                        </th>
                        <th>
                        <input type="text" id="lname_pl" onChange={this.changeLn} value={this.state.last_name} placeholder={"  "+window.localStorage.ln}/>
                        </th>   
                        <th>
                        <button id="ln_button" onClick={this.lnOnChange}>Change</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                        Phone:
                        </th>
                        <th>
                        <input type="text" id="phone_pl" onChange={this.changePhone} value={this.state.phone_number} placeholder={"  "+window.localStorage.phone}/>
                        </th>   
                        <th>
                        <button id="ph_button" onClick={this.phoneOnChange}>Change</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                        Email:
                        </th>
                        <th>
                        <input type="text" id="email_pl" onChange={this.changeEmail} value={this.state.email} placeholder={"  "+window.localStorage.email}/>
                        </th>   
                        <th>
                        <button id="em_button" onClick={this.emialOnChange}>Change</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                        Name on invoice:
                        </th>
                        <th>
                        <input type="text" id="name_invoice_pl" onChange={this.changeNOI} value={this.state.name_on_invoice} placeholder={this.state.name_on_invoice}/>
                        </th>   
                        <th>
                        <button id="ni_button" onClick={this.NOIonChange}>Change</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                        Biller email:
                        </th>
                        <th>
                        <input type="text" id="email_biller_pl" onChange={this.changeBmail} value={this.state.biller_email} placeholder={this.state.biller_email}/>
                        </th>   
                        <th>
                        <button id="em_button" onClick={this.bmailOnChange} >Change</button><br/>
                        </th>
                    </tr>   
                    </table> 
            </div>

            </div>
          );
    }
}
  
export default Profile;