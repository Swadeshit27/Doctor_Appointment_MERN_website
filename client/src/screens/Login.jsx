import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async (e) => {
    e.preventDefault();
    const fetchData = await fetch("http://localhost:5000/login"
      , {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" }
      }
    )
    const jsonData = await fetchData.json();
    if (fetchData.status === 400 || !jsonData) {
      window.alert("Invalid log in details")
    }
    else {
      window.alert("successful log in details")
      // console.log(jsonData);
      localStorage.setItem("userEmail", email);
      console.log(localStorage.getItem("userEmail"))
      localStorage.setItem("token", jsonData.token);
      // console.log(localStorage.getItem("token"));
      navigate("/")
    }

  }
  return (
    <>
      <div className="main_header picsign">
        <div className="row">
            <div className="totallog">
              <div className="form-box">
                <h2>Sign in</h2>
                <form>
                  <div className="input-box">
                  <span className="icon"><i className="bi bi-envelope-fill"></i></span>
                  <input type="email" name="email" className="text-input" onChange={(e) => setEmail(e.target.value)} value={email} id="email" placeholder="please enter your email" autoComplete='off' required />
                    <label htmlFor="" className="label">Email*</label>
                  </div>
                  <div className="input-box">
                  <span className="icon"><i className="bi bi-lock-fill"></i></span>
                  <input type="password" className="text-input" name="password" onChange={(e) => setPassword(e.target.value)} value={password} id="password" placeholder="please enter your password" autoComplete='off' required />
                    <label htmlFor="" className="label">Password*</label>
                    
                  </div>
                  <button type="submit" onClick={loginUser} className='loginbutton'>Submit</button>
                  <Link to="/signup" style={{ "color": "#fff" }}><button className='loginbutton'>Create Account</button></Link>
                </form>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default Login
