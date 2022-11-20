import React from 'react';
import './Getapp.css';
const Getapp=()=>{
    return(
        <>
<div className="main">
<h1 className="text">Get our App</h1>

  <div className="apps">
    
    <div className="storeimg col-sm-12 col-md-6 col-lg-5">
    <img src="https://www.android.com/static/2016/img/certified/millions-apps-mobile.jpg" alt=''/>
     </div>

    <div className="col-sm-12 col-md-6 col-lg-5 app-cont">
     <h3>Our App is ready for you. Take a look and enjoy!</h3>
    <h3>Find what your looking for </h3>
    <h3>easy to use</h3>
    <h3>more quick , more slick</h3>
    <a href="https://apps.apple.com/us/genre/mac/id39?mt=12"><button class="downbtn btn btn-dark btn-lg"><i class="storeicon fa-brands fa-apple"></i>Download</button></a>
    <a href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026415_creativeid_535350509927_device_c&gclid=EAIaIQobChMIko3m6eii-AIVn5JmAh26xwYWEAAYASAAEgL75vD_BwE&gclsrc=aw.ds" ><button class="downbtn btn btn-light btn-outline-dark btn-lg"><i class="storeicon fa-brands fa-google-play"></i>Download</button></a>
    </div>

  </div>
</div>

        </>
    )
}
export default Getapp;