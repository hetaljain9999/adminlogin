import React, { useState } from 'react' ;   
import './LoginSignin.css'

const LoginSignin= () =>    {
    const[action,setAction]=useState("Sign in")
    return(
        <div  className='container'>
            <div className='header'>
                <div className='text'> Venue Admin Login </div>
                <div className='underline'></div>

            </div>
            <div className="inputs">

            <div className="input">
                <input type="username" placeholder='Username'/>

            </div>
            <div className="input">
                <input type="password" placeholder='Password'/>

            </div>

            </div>
            <div className="submit-container">
                <div className="submits">
                    <button>Sign in</button></div>
                <div className="submit">New Registration ?</div>

            </div>

        </div>

    )

 
}

export default LoginSignin