import React from 'react';
import './addservice.css';
  
const AddService = () => {
  return (
    <div class="page">
      <h1 >Add service type</h1>
            <input type="text" id="service_text" placeholder="  Enter service type"/><br/>
            <button id="service_button">Add service type</button>
    </div>
  );
};
  
export default AddService;