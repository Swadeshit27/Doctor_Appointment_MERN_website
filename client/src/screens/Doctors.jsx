import React, { useEffect, useState } from 'react'
import Card from '../components/Card'



const Doctors = () => {
    const [doctorsLi, setdoctorsLi] = useState([])
    const DoctorsList = async () => {
        const getdata = await fetch("http://localhost:5000/doctorsList", {
            method: "GET"
        })
        const jsonData = await getdata.json();
        console.log(jsonData)
        setdoctorsLi(jsonData);
    }
    useEffect(() => {
        DoctorsList();
    }, [])
    return (
        <div className="container">
            <h1 className='text-center text-capitalize my-5'>Meet our best doctors</h1>
            <div className="row">
                {doctorsLi !== [] ? doctorsLi.map((val) => {
                    console.log(val)
                    return (
                        <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-5' >
                            <Card data={val} />
                        </div>
                    )
                }) : <h1>sorry there is some technical error</h1>}
            </div>
        </div>
    )
}

export default Doctors
