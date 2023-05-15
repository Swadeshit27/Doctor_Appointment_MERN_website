import React from 'react'
import { Link } from 'react-router-dom';
import { useCart, useDispatch } from "./contextReducer"

const Card = (props) => {
    const { _id,name, email, phone, degree, specialist, experience, age, time,fee } = props.data;
    const dispatch = useDispatch();
    const handonadd = async () => {
        await dispatch({ type: "ADD", _id, name, phone, specialist,fee, date: new Date().toLocaleString().slice(0, 9)  })
    }
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-capitalize">Dr. Name: {name}</h5>
                    <p className="card-text text-capitalize">Qualification: {degree} </p>
                    <p className="card-text text-capitalize">Field: {specialist} </p>
                    <p className="card-text ">Experience: {experience} </p>
                    <p className="card-text text-capitalize">Age: {age} </p>
                    <p className="card-text ">Visiting Time: {time} </p>
                    <p className="card-text">Email: {email} </p>
                    <p className="card-text">Phone No: {phone} </p>
                    <Link onClick={handonadd}  className="btn btn-primary" to={"/book"}>Book Now</Link>
                </div>
            </div>
        </>
    )
}

export default Card
