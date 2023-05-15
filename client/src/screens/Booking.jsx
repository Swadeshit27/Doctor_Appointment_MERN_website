import React, { useState } from 'react'
import { useCart, useDispatch } from "../components/contextReducer"
import { Link, useNavigate } from 'react-router-dom';

const Booking = () => {
    const navigate = useNavigate();
    const data = useCart();
    const dispatch = useDispatch();
    const [patientData, setpatientData] = useState({
        data: data[0], patient: "", gender: "", age: "", appoitmetdate: "", problem: ""
    })
    const handonchange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setpatientData({ ...patientData, [name]: value })
    }
    const bookingappitment = async () => {
        const { data, patient, gender, age, appoitmetdate, problem } = patientData;
        const sendPatientdata = await fetch("http://localhost:5000/patientdata", {
            method: "POST",
            body: JSON.stringify({ data, patient, gender, age, appoitmetdate, problem }),
            headers: { "Content-Type": "application/json" }
        })
        const jsonData = await sendPatientdata.json();
        // console.log(jsonData)
        if (sendPatientdata.status === 200) {
            dispatch({ type: "DROP" })
        }
    }
    return (
        <>
            {data[0] ?
                <div className="container my-5" >
                    <h1 className='text-center text-capitalize mb-5'>please fill the following details</h1>
                    <div className="row">
                        <p className='fs-3 col-md-6'><span className='fw-semibold fs-2'>Doctor Name: </span> {data[0].name}</p>
                        <p className='fs-3 col-md-6'><span className='fw-semibold'>Phone: </span> {data[0].phone}</p>
                        <p className='fs-3 col-md-6'><span className='fw-semibold'>Department: </span> {data[0].specialist}</p>
                        <p className='fs-3 col-md-6'><span className='fw-semibold'>Booking Date: </span> {data[0].date}</p>
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Patient Name</label>
                                <input type="text" className="form-control" value={patientData.patient} onChange={handonchange} name='patient' />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">Gender</label>
                                <input type="text" className="form-control" value={patientData.gender} onChange={handonchange} name='gender' />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Age</label>
                                <input type="number" className="form-control" value={patientData.age} onChange={handonchange} name='age' />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Choose appointment Date</label>
                                <input type="date" className="form-control" value={patientData.appoitmetdate} onChange={handonchange} name='appoitmetdate' />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Your Problem</label>
                                <textarea type="text" className="form-control" placeholder="please elaborate your problem" value={patientData.problem} onChange={handonchange} rows={5} name='problem' />
                            </div>
                            <h3>Visiting Charge:{data[0].fee}/-</h3>
                            <div className="col-12">
                                <button type="submit" className="btn btn-success me-4" onClick={bookingappitment} >Confirm Appoiment</button>
                                <Link to={'/doctors'}><button type="submit" className="btn btn-danger">Cancel Appoiment</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
                : <h3 className='text-center my-5'>Your appoitment is successful</h3>}
        </>
    )
}

export default Booking
