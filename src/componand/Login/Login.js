import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './Login.css';
function LOG() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)
    const history=useHistory();
    function Validate() {
        if (email.trim().length === 0 && password.trim.length === 0) {
            setEmailErr(true)
            setPasswordErr(true)
        } else {
            setEmailErr(false)
            setPasswordErr(false)
            history.push('/home')
        }
      
    }
    return (
        <div className="login">

            <form id="container">
                <h1>Login</h1>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input><br></br>
                {emailErr && <p>please enter your email</p>}<br></br>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input><br></br>
                {passwordErr && <p>please enter your correct password</p>}<br></br>
                <button id="btn" onClick={Validate}>Login</button>

            </form>
        </div>
    )

}
export default LOG