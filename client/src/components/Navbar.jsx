import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
// import Badge from 'react-bootstrap/Badge';
// import Avatar from '@mui/material/Avatar';


const Navbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        window.alert("log out successfully")
        navigate("/login")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navcolor" style={{ "listStyle": "none" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-3 fw-semibold text-black" to="/">BookDoctors</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {!localStorage.getItem("token") ?
                                <li className="nav-item">
                                    <Link className="nav-link fs-4 fw-semibold active text-warning" aria-current="page" to="/">Home</Link>
                                </li>

                                : <>
                                    <li className="nav-item">
                                        <Link className="nav-link fs-4 fw-semibold active text-warning" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link fs-4 fw-semibold active text-warning" aria-current="page" to="/doctors">Doctors</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link fs-4 fw-semibold active text-warning" aria-current="page" to="/myappoitment">My appoitment</Link>
                                    </li>
                                </>
                            }
                        </ul>
                        {!localStorage.getItem("token") ?
                            <div className='d-flex pe-4'>
                                <li className="nav-item ">
                                    <Link className="btn bg-white text-success mx-2 fw-semibold" to="/login">User LogIn/SignUp</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="btn bg-white text-success mx-2 fw-semibold" to="/admin">Admin LogIn/SignUp</Link>
                                </li>
                            </div>
                            :
                            <div className='d-flex pe-4'>
                                <div className="btn bg-white text-success mx-2 fw-semibold" onClick={logout}>Log Out</div>
                                <Link className="btn bg-white text-success mx-2 fw-semibold" to={'/aboutuser'}  >user Details</Link>
                                {/* <Avatar alt="swadesh" src="" /> */}
                            </div>
                        }

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
