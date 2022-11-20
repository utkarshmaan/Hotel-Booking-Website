import React from "react";

function Popcard(props) {
 
  return (
    <>
  <div class="col-sm-12 col-md-6 col-lg-3 dcards">
 
    <div class="card  shadow-lg">
    <img src={props.imagel} alt=""/>
      <div class="card-body">
        <h5 class="card-title">{props.hotelname}</h5>
        <p class="card-text">{props.price}</p>
        <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                   <i className='fa fa-star'></i>
                   <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
      </div>
    </div>
  </div>

      </>
  );
}

export default Popcard;
