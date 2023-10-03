
import React, { useState } from 'react'

import './SignUp.css'
// import user_icon from './components/Assets/person2_icon.png'
// import email_icon from '../Assets/email_icon.jpg'
// import password_icon from './components/Assets/password_icon.png'


const SignUp = () => {

    const[action, setAction] = useState("Sign In");

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div> 
        <div className='inputs'>
            {action==="Sign In"? <div></div>: <div className="input">
             <img src="{user_icon}" alt=""/>
             <input type="text" placeholder=" 👤 Name"/>
            </div>}
        
        <div className="input">
          <img src="{email_icon}" alt=""/>
          <input type="email" placeholder=' ✉️ Email Id'/>
        </div>
        <div className="input">
          <img src="{password_icon}" alt=""/>
          <input type="password" placeholder=' 🔒 Password'/>
        </div>
        </div> 
        {action==="Sign Up"?<div></div>:  <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
       
        <div className='submit-container'>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign In")}} >Sign In</div>
            <div className={action==="Sign In"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
            

        </div>
    </div>
  )
}

export default SignUp