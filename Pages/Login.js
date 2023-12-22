import React from 'react';
import { useState } from 'react';
import Logo from '../Assets/logo-login.png';
import image from '../Assets/login-bg.png';
import LoginBannerTwo from '../Assets/login-bg-0.png';
import {emailValidator , passwordValidator} from '../Data/regexValidator';
import { Link } from "react-router-dom";
import FoodieHome from './FoodieHome';


const Login = () => {

  const [input , setInput] = useState({email: '' , password: ''});

  const [errorMessage , setErrorMessage] = useState('');

  const [successMessage , setSuccessMessage] = useState('');

  const getEmail=localStorage.getItem("emailData")
  const getPassword=localStorage.getItem("passwordData")

  const handleChange = (e) =>{
    setInput({...input,[e.target.name]: e.target.value})
  }

  const loginSubmit = (e) =>{
    e.preventDefault();
    setSuccessMessage('');


    if(! emailValidator(input.email)) 
    return setErrorMessage("Please enter valid email");
  
    if(! passwordValidator(input.password))
    return setErrorMessage("The password you entered is incorrect. Please try again");

    // if(input.email !== 'raghul7654@gmail.com' || input.password !== 'Raghul@123') return setErrorMessage('Invalid Email or password');
    // // setSuccessMessage("Successfully Validated");

    // localStorage.setItem("emailData","raghul7654@gmail.com")
    // localStorage.setItem("passwordData","Raghul@123")
    
    setSuccessMessage("Successfully Validated");

  }


  return (
    <div>
       {
        getEmail && getPassword ?
        <FoodieHome/> :
        <div className="login-page">
          <div className="login-banner" style={{ backgroundImage:`url(${image})`}}>  
            <div className="login-container">
              <div className="login-img">
                <img src={LoginBannerTwo} alt='' />
              </div>
              <div className="login-form">
                  <div className="logo-img">
                    <img src={Logo} alt='' />
                  </div>
                  <div className="logo-content">
                    <h1>Hellow User</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    {errorMessage.length > 0 &&(
                      <div style={{marginBottom: '15px',color: 'red' }} >
                        {errorMessage}
                      </div>
                    
                    )}
                    {successMessage.length > 0 &&(
                      <div style={{marginBottom: '15px',color: 'green' }} >
                        {successMessage}
                      </div>
                    
                    )}
                      <form onSubmit={loginSubmit}>
                        <input className="login-input mar-btm-25" type="text" name="email" placeholder="Email & Username" onChange={handleChange} /> <br />
                        <input className="login-input mar-btm-10" type="password" name="password" placeholder="Password" onChange={handleChange} /> <br />
                        <span>Forget Password ?</span><br />
                        <button className="login-btn">
                          <Link to={"/home"}>Login</Link> 
                        </button ><br />
                      </form>
                  </div>
              </div>
            </div>
          </div>
        
      </div>
    }
    </div>
  )
}

export default Login
