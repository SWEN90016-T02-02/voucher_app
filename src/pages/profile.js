import React from 'react';
import './profile.css'
import photo from '../images/profile_picture.jpg';
  
const Profile = () => {
  return (
    <div class="page">
      <div class="body" id="profile">
      <div class="nav" id="profile"><h2>Personal Information</h2></div>
       <div class="a" id="profile">
        <div class="one" id="profile">
            <input type="text" class="one1" id="profile" placeholder="Please enter your old password"/><br/>
            <input type="text" class="one2" id="profile" placeholder="Please enter a new password"/><br/>
            <button class="one3" id="profile">Change the password</button>
        </div>
        <div class="two" id="profile">
            <div class="two1" id="profile"><img  id="profile" src={photo}/> </div>
            <div class="text1" id="profile">NAME</div>
            <div class="two2" id="profile">
                <div class="two2-one" id="profile">Male/Female</div>
                <div>User or Administrator</div>
            </div>
        </div>
        <div class="three" id="profile">
            <div class="three1" id="profile">
                <span class="three-image2" id="profile"> </span>
                <span>Message</span>
                <button id="profile">0</button>
            </div>
            <div class="three1" id="profile">
                <span class="three-image3" id="profile"> </span>
                <span>Modify My Information</span>
            </div>
            <div class="three1" id="profile">
                <span class="three-image4" id="profile"> </span>
                <span>Log Out</span>
            </div>
        </div>
    </div>
    </div>
    </div>
  );
};
  
export default Profile;