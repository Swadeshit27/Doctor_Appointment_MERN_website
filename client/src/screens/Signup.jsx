import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();

    const [user, setuser] = useState({
        name: "", email: "", mobile: "", password: "", cpassword: ""
    })
    const addData = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setuser({ ...user, [name]: value })
    }
    const signupUser = async (e) => {
        e.preventDefault();
        const { name, email, mobile, password, cpassword } = user;
        const fetchData = await fetch("http://localhost:5000/signup", {
            method: "POST",
            body: JSON.stringify({ name, email, mobile, password, cpassword }),
            headers: { "Content-Type": "application/json" }
        }
        )
        const jsonData = await fetchData.json();
        if (fetchData.status === 422 || !jsonData) {
            window.alert("Invalid log in details")
        }
        else {
            window.alert("successful log in details")
            navigate("/login")
        }
    }


    return (
        <>
            <div className="main_header picsign">
                <div className="row">
                        <div className="totallog2">
                            <div className="form-box">
                                <h2>Create Account</h2>
                                <form>
                                    <div className="input-box2 input-box">
                                    <span className="icon"><i class="bi bi-person-fill"></i></span>
                                    <input type="text" className="text-input" name="name" id="name" value={user.name} onChange={addData} autoComplete='off'
                                            placeholder="please enter your name" required />
                                        <label htmlFor='name' className="label">Full Name*</label>
                                        
                                    </div>

                                    <div className="input-box2 input-box">
                                    <span className="icon"><i className="bi bi-envelope-fill"></i></span>
                                    <input type="email" className="text-input" name="email" id="email" value={user.email} onChange={addData} autoComplete='off' placeholder="please enter your email" required/>
                                        <label htmlFor='email' className="label">Email*</label>
                                        
                                    </div>
                                    <div className="input-box2 input-box">
                                    <span className="icon"><i class="bi bi-telephone-fill"></i></span>
                                    <input type="number" className="text-input" name="mobile" id="mobile" value={user.mobile} onChange={addData} autoComplete='off'
                                            placeholder="please enter your mobile no" required/>
                                        <label htmlFor='mobile' className="label">Mobile No*</label>
                                        
                                    </div>                              
                                    <div className="input-box2 input-box">
                                    <span className="icon"><i class="bi bi-lock-fill"></i></span>
                                        
                                        <input type="password" className="text-input" name="password" id="password" value={user.password} onChange={addData} autoComplete='off'
                                            placeholder="please enter your password" required/>
                                            <label htmlFor='password' className="label">Password*</label>
                                            
                                    </div>
                                    <div className="input-box2 input-box">
                                        <span className="icon"><i class="bi bi-lock-fill"></i></span>
                                        
                                        <input type="password" className="text-input" name="cpassword" id="cpassword" value={user.cpassword} onChange={addData} autoComplete='off'
                                            placeholder="confirm password" required/>
                                            <label htmlFor='cpassword' className="label">Confirm Password*</label>
                                    </div>
                                    <button type="submit" value="signup" onClick={signupUser} className='loginbutton'>Submit</button>
                                    <h3 className='alhaa'>Already have an account ? <Link to="/login" >Log In</Link></h3>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default Signup
