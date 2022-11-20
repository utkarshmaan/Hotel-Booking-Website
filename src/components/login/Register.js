import React from 'react';
import HeadTitle from '../../common/HeadTitle/HeadTitle';


const Register=()=>{
    return(
        <>
        <HeadTitle/>
        <section className='cont'>
                <div className='r-cont'>
                    <div className='main-content'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp" alt=""/>

                        <h1>Register</h1>

                        <form>
                        <div className='grid1'>
                        <div className='input'>
                                <span>
                                    First name <label>*</label>
                                </span>
                                <input type='text' name='fname'/>

                            </div>

                            <div className='input'>
                                <span>
                                    Last name <label>*</label>
                                </span>
                                <input type='text' name='lname'/>

                            </div>

                            <div className='input'>
                                <span>
                                    Phone <label>*</label>
                                </span>
                                <input type='text' name='phone'/>

                            </div>

                            <div className='input'>
                                <span>
                                    Email <label>*</label>
                                </span>
                                <input type='email' name='email'/>

                            </div>
                            <div className='input'>
                                <span>
                                    Password<label>*</label>
                                </span>
                                <input type='password' name='password'/>

                            </div>
                            <div className='input'>
                                <span>
                               Confirm Password<label>*</label>
                                </span>
                                <input type='password' name='password'/>

                            </div>
                           
                            <div className='g-input'>
                            <span>
                                    Gender <label>*</label>
                                </span>
                                <div className='g-radio'>
                                <div className='r-m'>
                                
                                <input type='radio' name='gender'/>
                                <p>Male</p>
                                </div>

                                <div className='r-f'>
                                
                                <input type='radio' name='gender'/>
                                <p>Female</p>
                                </div>
                                <div className='r-f'>
                                
                                <input type='radio' name='gender'/>
                                <p>Others</p>
                                </div>
                                </div>
                            </div>
                            
                             
                            </div>
                
                            <button className='r-btn'>Submit</button>

                        </form>
                    </div>
                </div>
            </section>
  
          
        
        </>
    )
}
export default Register;