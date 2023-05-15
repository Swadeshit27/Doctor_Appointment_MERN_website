import React, { useEffect, useState } from 'react'

const Myappoitment = () => {
    const [AppData, setAppData] = useState([])
    const appoitment = async () => {
        const data = await fetch("http://localhost:5000/appoitmentData", {
            method: "GET"
        })
        const jsondata = await data.json();
        console.log(jsondata);
        setAppData(jsondata)
    }
    useEffect(() => {
        appoitment();
    }, [])

    return (
        <div>
            {AppData !== {} ?
                AppData.map((val, i) => {
                    const appdate = val.appoitmetdate;
                    {/* appdate.slice(0,10) */ }
                    return (
                        <div className='container  p-3 bg-success text-white my-3 d-flex ' >
                            <div className='col-md-6 d-flex flex-sm-column '>
                                <p>Patient Name: {val.patient}</p>
                                <p>Patient Age: {val.age}</p>
                                <p>Gender: {val.gender}</p>
                                <p>Appoitment Date: {appdate.slice(0, 10)}</p>
                                <p>Patient Problem: {val.problem}</p>
                            </div>
                            {val.data.map((items, i) => {
                                return (
                                    <div className='d-flex col-md-6 flex-sm-column p-2'>
                                        <p>Dr. Name: {items.name}</p>
                                        <p>Dr. Phone no: {items.phone}</p>
                                        <p>Department: {items.specialist}</p>
                                    </div>
                                )
                            })}
                            
                        </div>
                    )
                }) : <h1>Please appoitment any doctors</h1>
            }
        </div>
    )
}

export default Myappoitment
