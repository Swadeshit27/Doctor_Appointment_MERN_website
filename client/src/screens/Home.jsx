import React from 'react'
import Service from '../components/Service';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import Person3Icon from '@mui/icons-material/Person3';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import HotelIcon from '@mui/icons-material/Hotel';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Home = () => {
    return (
        <>
            <div className='firstdev'>
                <div class="container-fluid main_header">
                    <div class="row">
                        <div class="col-md-10 col-12 mx-auto">
                            <div class="row">
                                <div class="col-md-6 col-12 main_header_left order-md-2 order-lg-1">
                                    <div className='subhed'>
                                        <h1><span className='bigf1'><span className='bigf2'>o</span>ur</span> expertise at your service</h1>
                                        <h2>Your most trusted health partner.</h2>
                                        <h3>The best match services for you & your health.</h3>
                                    </div>
                                    <div className='buttons2'>
                                        <button className='button2'>About</button>
                                        <button className='button2'>Sign in</button>
                                    </div>
                                </div>
                                <div class="col-md-6 col-12 main_header_right order-md-1 order-lg-2">
                                    <img src="../images/doctor2.png" alt="images" srcset="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='seconddev'>
                <h1 className='text-center my-3 fw-semibold' style={{ color: "blue" }}>Why Choose Us</h1>
                <div className='row mx-3 my-3'>
                    <Service name={"Health Card accepted"} dec={"With the card you can enjoy cashless access to healthcare services at our organization."} icon={<MonitorHeartIcon className='fs-1 text-success' />} />
                    <Service name={"Medicines"} dec={"Our medicine facility offers a wide range of medications for all types of health conditions."} icon={<VaccinesIcon className='fs-1 text-success' />} />

                    <Service name={"Expert Consultancy"} dec={"Our organization is proud to have a team of highly qualified and experienced doctors."} icon={<Person3Icon className='fs-1 text-success' />} />
                    <Service name={"Blood Bank"} dec={"To ensure that all patients have access to safe and effective blood transfusions."} icon={<BloodtypeIcon className='fs-1 text-success' />} />

                    <Service name={"Bed Facility"} dec={"Our beds are designed with your comfort and safety in mind, and our trained medical staff are available."} icon={<HotelIcon className='fs-1 text-success' />} />
                    <Service name={"24/7 Ambulance"} dec={" Ambulance services is essential for ensuring that patients receive timely and appropriate care in emergency."} icon={<MinorCrashIcon className='fs-1 text-success' />} />
                    <Service name={"Easy to appointment"} dec={"With our easy-to-use appointment booking system, you can book your appointment in just a few clicks."} icon={<MobileFriendlyIcon className='fs-1 text-success' />} />
                    <Service name={"Low cost Checkup"} dec={"Looking for affordable healthcare options? Our low-cost health checkup service is here to help!"} icon={<MedicalServicesIcon className='fs-1 text-success' />} />
                </div>
            </div>
            <div className='thirddev'>
                <h1 className='text-center my-3 fw-semibold' style={{ color: "blue" }}>Our Services</h1>
                <div className='allservice'>
                    <table class="table fs-5 fw-semibold" >
                        <tbody>
                            <tr>
                                <td className='ps-5 pt-4'>Endosurgery</td>
                                <td className='pt-4'>Resuscitation</td>
                                <td className='pt-4'>Vascular surgery</td>
                                <td className='pt-4'>Neurology</td>
                            </tr>
                            <tr>
                                <td className='ps-5'>Plastic Surgery</td>
                                <td>Urology</td>
                                <td>Combustiology</td>
                                <td>Proctology</td>
                            </tr>
                            <tr>
                                <td className='ps-5'>Analyses</td>
                                <td>Cardiology</td>
                                <td>Electrocardiography</td>
                                <td>Therapy</td>
                            </tr>
                            <tr>
                                <td className='ps-5'>Traumatology</td>
                                <td>Oncology</td>
                                <td>Dermatology</td>
                                <td>Pediatrics</td>
                            </tr>
                            <tr>
                                <td className='ps-5'>Orthopedics</td>
                                <td>Gynecology</td>
                                <td>Covid-19</td>
                                <td>Sound Therapy</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='forthdev'>
                <h1 className='text-center my-3 fw-semibold' style={{ color: "blue" }}>Contact Us</h1>
                <div className='contactdiv'>
                    <div className='rdiv'>
                        <div className='rudiv'><img src="../images/contact.svg" alt="" srcset="" /></div>
                        <div className='allloca'>
                            <div className="place"><span><LocationOnIcon/></span>Jalpaiguri</div>
                            <div className="contactloc"><span><i class="bi bi-telephone-fill"></i></span>+91 9999999999</div>
                            <div className="emailloc"><span><i className="bi bi-envelope-fill"></i></span>skr@gmail.com</div>
                        </div>
                    </div>
                    <div className='ldiv'>
                        <div className="form-box">
                            <form>
                                <div className="input-box">
                                    <span className="icon"><i class="bi bi-person-fill"></i></span>
                                    <input type="text" className="text-input" name="name" id="name" autoComplete='off'
                                        placeholder="please enter your name" required />
                                    <label htmlFor='name' className="label">Full Name*</label>

                                </div>

                                <div className="input-box">
                                    <span className="icon"><i className="bi bi-envelope-fill"></i></span>
                                    <input type="email" className="text-input" name="email" id="email" autoComplete='off' placeholder="please enter your email" required />
                                    <label htmlFor='email' className="label">Email*</label>

                                </div>
                                <div className="input-box">
                                    <span className="icon"><i class="bi bi-telephone-fill"></i></span>
                                    <input type="number" className="text-input" name="mobile" id="mobile" autoComplete='off'
                                        placeholder="please enter your mobile no" required />
                                    <label htmlFor='mobile' className="label">Mobile No*</label>

                                </div>
                                <h3 className='fs-5'>Enter Your Gender</h3>
                                <div className="radio">
                                    <input type="radio" name="gender" value="male" id="male" />
                                    <label for="male" className='ml-2'>Male</label>
                                    <input type="radio" name="gender" value="female" id="female" />
                                    <label for="female" className='mr-2'>Female</label>
                                </div>


                                <button type="submit" value="signup" className='loginbutton mt-5'>Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fifthdev'>
            <h1 className='text-center my-3 fw-semibold' style={{ color: "blue"}}>About Us</h1>
            <div className="aboutsec">
                <div className="aboutkeshab">
                    <img src="../images/keshab.jpg" alt="" srcset="" />
                    <h1 className='ownname'>Keshab Das</h1>
                    <h2>Frontend Developer</h2>
                    <div className="profile">
                            <a href="#" className="profileIcon"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="profileIcon"><i className="bi bi-instagram "></i></a>
                            <a href="#" className="profileIcon"><i className="bi bi-linkedin "></i></a>
                            <a href="#" className="profileIcon"><i className="bi bi-twitter "></i></a>
                        </div>
                </div>
                <div className="aboutswadesh">
                <img src="../images/swadesh.jpg" alt="" srcset="" />
                <h1 className='ownname'>Swadesh Pal</h1>
                    <h2>Backend Developer</h2>
                    <div className="profile">
                            <a href="#" className="profileIcon"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="profileIcon"><i className="bi bi-instagram "></i></a>
                            <a href="#" className="profileIcon"><i className="bi bi-linkedin "></i></a>
                            <a href="#" className="profileIcon"><i className="bi bi-twitter "></i></a>
                        </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Home
