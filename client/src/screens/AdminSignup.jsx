import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminSignup = () => {
    const navigate = useNavigate();
    const [DocData, setDocData] = useState(
        { name: "", email: "", phone: "", degree: "", specialist: "", experience: "", age: "", time: "",fee:"" }
    );
    const addData = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setDocData({ ...DocData, [name]: value })
    }
    const senddata = async (e) => {
        e.preventDefault();
        const { name, email, phone, degree, specialist, experience, age, time,fee } = DocData;
        const fetchData = await fetch("http://localhost:5000/doctorData", {
            method: "POST",
            body: JSON.stringify({ name, email, phone, degree, specialist, experience, age, time,fee }),
            headers: { "Content-Type": "application/json" }
        }
        )
        const jsonData = await fetchData.json();
        if (fetchData.status === 422 || !jsonData) {
            window.alert("Invalid log in details")
        }
        else {
            window.alert("successful log in details")
            
            navigate("/admin")
        }
    }
    return (
        <>
            <div className="container my-5">
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Name</label>
                        <input type="text" className="form-control" value={DocData.name.toLocaleLowerCase()} onChange={addData} name='name' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Email</label>
                        <input type="email" className="form-control" value={DocData.email.toLocaleLowerCase()} onChange={addData} name='email' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Phone No</label>
                        <input type="number" className="form-control" value={DocData.phone} onChange={addData} name='phone' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Degree</label>
                        <input type="text" className="form-control" value={DocData.degree} onChange={addData} name='degree' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Specialist</label>
                        <input type="text" className="form-control" value={DocData.specialist.toLocaleLowerCase()} onChange={addData} name='specialist' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Experience</label>
                        <input type="number" className="form-control" value={DocData.experience} onChange={addData} name='experience' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Age</label>
                        <input type="number" className="form-control" value={DocData.age} onChange={addData} name='age' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Appoitment Time</label>
                        <input type="text" className="form-control" id="inputEmail4" value={DocData.time} onChange={addData} name='time' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Visiting Charge</label>
                        <input type="data" className="form-control" id="inputEmail4" value={DocData.fee} onChange={addData} name='fee' />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={senddata}>Add Doctor</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminSignup
