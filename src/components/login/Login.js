import React from 'react';
import { Link } from 'react-router-dom';
import HeadTitle from '../../common/HeadTitle/HeadTitle';
import './style.css';
const Login=()=>{
    return(
        <>
        <HeadTitle/>
        <section className='forms'>
            <div className='f-container'>
            
                <div className='sign-box'>
               
                    <p>Enter your e-mail id and password</p>
                    <form >
                    <div className='input'>

                                <input type='email' name='email' placeholder='email' />
                                <input type='password' name='password' placeholder='password'/>
                            <div className='check'>
                               <input type='checkbox' className='check-b'/>
                               <label>Remember Me</label>
                            </div>

                            <div>
                                <span>Forgot Password</span>
                            </div>

                            <button type='submit' className='sign-btn'>Sign In</button>
                            <p>Don't have an account <Link to='/register'></Link></p>
                    </div>
                    </form>        
                </div>
            </div>
        </section>
        
        </>
    )
}
export default Login;