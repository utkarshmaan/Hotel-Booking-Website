import React, { useState } from 'react';
import './Contact.css';
const ContactForm = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')


    const [allValue, setAllValue] = useState([])

    const formSubmit = (e) => {
        e.preventDefault()
        const newValue = { fname, lname, phone, email, subject, message }
        setAllValue([...allValue, newValue])

        setFname("")
        setLname("")
        setPhone("")
        setEmail("")
        setSubject("")
        setMessage("")
    }
    return (
        <>
            <section className='contact-form'>
                <div className='contact-container'>
                    <div className='main-content'>
                        <h1>Contact Form</h1>
                        <p>Fill out the form below</p>

                        <form onSubmit={formSubmit}>
                            <div className='grid1'>
                                <div>
                                    <span>
                                        First name <label>*</label>
                                    </span>
                                    <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} />

                                </div>
                                <div>
                                    <span>
                                        Last name <label>*</label>
                                    </span>
                                    <input type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} />

                                </div>
                                <div>
                                    <span>
                                        Phone <label>*</label>
                                    </span>
                                    <input type='text' name='phonr' value={phone} onChange={(e) => setPhone(e.target.value)} />

                                </div>
                                <div>
                                    <span>
                                        Email <label>*</label>
                                    </span>
                                    <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                                </div>
                                <div>
                                    <span>
                                        Subject <label>*</label>
                                    </span>
                                    <input type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />

                                </div>

                            </div>
                            <div>
                                <span>
                                    Message <label>*</label>
                                </span>
                                <textarea name='message' cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>


                            </div>
                            <button className='primary-btn'>Submit</button>
                        </form>
                    </div>
                    <div className='side-content'>
                        <h1>Visit our location</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1368222.3423849056!2d76.07813114961696!3d28.565096715743174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1659896442115!5m2!1sen!2sin" width="350" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>

                        <br />
                        <h1>Message Us</h1>
                        <span>bookhotel@gail.com</span>
                        <br />
                        <h1>Call Us</h1>
                        <span>0+136861-37382</span>
                        <br />
                        <div className='con-icon'>
                            <h1>Follow us</h1>
                            <i className='fab fa-facebook lg'></i>
                            <i className='fab fa-twitter lg'></i>
                            <i className='fab fa-linkedin lg'></i>
                            <i className='fab fa-instagram lg'></i>

                        </div>

                    </div>
                </div>
            </section>


            <section className='show-data'>
                {allValue.map((currentValue) => {
                    const { fname, lname, phone, email, subject, message } = currentValue;
                    return (
                        <div className='sing-box'>
                            <h1>Send Sucessfully</h1>
                            <h3>First Name: <p>{fname}</p></h3>
                            <h3>Last Name: <p>{lname}</p></h3>
                            <h3>Phone: <p>{phone}</p></h3>
                            <h3>Email: <p>{email}</p></h3>
                            <h3>Subject: <p>{subject}</p></h3>
                            <h3>Message: <p>{message}</p></h3>
                        </div>

                    )
                })}

            </section>
        </>
    )
}
export default ContactForm; 