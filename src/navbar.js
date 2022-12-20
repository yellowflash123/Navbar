import user from "./img/user.png";
import edit from "./img/edit.png";
import inbox from "./img/envelope.png";
import settings from "./img/settings.png";
import help from "./img/question.png";
import logout from "./img/log-out.png";
import koushi from "./img/koushik.png";
import "./navbar.css";
import React, { useState, useEffect, useRef } from "react";
import Logo from "./img/logo.png";




function App() {
    

    const [open, setOpen] = useState(false);
  
    let menuRef = useRef();
  
    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpen(false);
          console.log(menuRef.current);
        }      
      };
  
      document.addEventListener("onTouchStart", handler);
      
  
      return() =>{
        document.removeEventListener("onTouchEnd", handler);
      }
  
    });
  
    return (
        
      <div className="App">
        <nav className="nav">
      <img className="img" src={Logo} />
      <ul>
        <li>
          <a href="/Vendor details">Vendor Details</a>
        </li>
        <li>
          <a href="/Statutory Details">Statutory Details</a>
        </li>
        <li>
          <a href="/Compliance Details">Compliance Details</a>
        </li>
        <li>
          <a href="/Bank Details">Bank Details</a>
        </li>
      </ul>
    </nav>
    <div className="vendor-det">
      
      <div className="form-div">
        <div className="label-div1">
          <label className="country-label">Address line - 1*</label>
          <input className="rectangle-input" type="text" required />
        </div>
        <div className="label-div1">
          <label className="country-label">Address line - 2</label>
          <input className="rectangle-input1" type="text" required />
        </div>
        <div className="frame-div3">
          <div className="label-div1">
            <label className="country-label">Country*</label>
            <input className="rectangle-input2" type="text" required />
          </div>
          <div className="label-div1">
            <label className="country-label">State*</label>
            <input className="rectangle-input2" type="text" required />
          </div>
        </div>
        <div className="frame-div3">
          <div className="label-div1">
            <label className="country-label">City*</label>
            <input className="rectangle-input2" type="text" required />
          </div>
          <div className="label-div1">
            <label className="country-label">Pincode*</label>
            <input className="rectangle-input2" type="text" required />
          </div>
        </div>
      </div>
      <div className="basicinformation-div9">
        <label className="basic-information-label">Basic information</label>
      </div>
      <div className="button-div10">
        <div className="buttonrow-div11">
          <button className="buttonstyle" value ="cancel">
            <div className="cancel-div">Cancel</div>
          </button>
          <button className="buttonstyle" value="save">
            <div className="cancel-div">Save</div>
          </button>
          <button className="buttonstyle" value="next">
            <div className="cancel-div">Next</div>
          </button>
        </div>
      </div>
    </div>
        <div className='menu-container' ref={menuRef}>
          <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <img src={koushi}></img>
          </div>
          
  
          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
            
            <ul>
              <DropdownItem img = {user} text = {"My Profile"}/>
              <DropdownItem img = {edit} text = {"Edit Profile"}/>
              <DropdownItem img = {inbox} text = {"Inbox"}/>
              <DropdownItem img = {settings} text = {"Settings"}/>
              <DropdownItem img = {help} text = {"Helps"}/>
              <DropdownItem img = {logout} text = {"Logout"}/>
            </ul>
          </div>
        </div>
        
        
      </div>
    );
  }
  
  function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    );
  }
  
  export default App;