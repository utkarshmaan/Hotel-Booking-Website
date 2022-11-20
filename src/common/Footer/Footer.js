import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'

var d=new Date().getFullYear();
const Footer=()=>{
    return(
        <>
        <div className="f-cont">
        <div className='row'>
        <div className='f-content'>
        
        <div className="f-follow">
        <h1>Follow us</h1>
            <div className="f-icons">
            <i class="fa-brands fa-facebook fa-xl"></i>
            <i class="fa-brands fa-twitter fa-lg"></i>
            <i class="fa-brands fa-linkedin fa-lg"></i>
            <i class="fa-brands fa-instagram fa-lg"></i>
            <i class="fa-brands fa-youtube fa-lg"></i>
            </div>
            </div>
            <div className="f-links">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about' >About</Link></li>
            <li><Link to='/gallery' >Gallery</Link></li>
            <li><Link to='/destination' >Destination</Link></li>
            <li><Link to='/blog' >Blog</Link></li>
            <li><Link to='/contact' >Contact Us</Link></li>
            <div className="f-sr">
            
            <li><Link to='/sign'>Sign In</Link></li>
            <li><Link to='/register'>Register</Link></li>
            
          </div>
            </div>
           
            </div>
            
          <p>©Copyright{d} All right reserved </p>
          </div>
        </div>


        </>
    )
}
export default Footer;