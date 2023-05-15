import React, { useEffect, useState } from 'react'

const UserDetails = () => {
    const [userData, setuserData] = useState({})
    const aboutuser = async () => {
        const token = localStorage.getItem("token");
        const fetchData = await fetch("http://localhost:5000/aboutUser", {
            method: "Post",
            body: JSON.stringify({token}),
            headers: { "Content-Type": "application/json" }
        })
        const jsonData = await fetchData.json();
        // console.log(jsonData)
        setuserData(jsonData)
    }
    useEffect(() => {
        aboutuser();
    }, [])
    const { name, email, mobile } = userData;
    return (
        <>
            <h1 className='text-center my-4'>Your Details</h1>
            <div className="container mb-5 d-flex justify-content-center align-items-center f">
                <div className="col-md-12 col-lg-8 bg-dark  text-white p-4 d-flex" style={{ height: "25rem" }}>
                    <img src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=" alt="" width={150} height={150} />
                    <div>
                        <p className='ms-5 text-capitalize fs-4'>name: {name}</p>
                        <p className='ms-5 text-capitalize fs-4'>email: {email}</p>
                        <p className='ms-5 text-capitalize fs-4'>mobile: {mobile}</p></div>
                </div>
            </div>
        </>
    )
}

export default UserDetails
