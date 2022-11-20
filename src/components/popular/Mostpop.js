import React from "react"
import Popcard from "./Cards"
import './Mostpop.css';
import MostpopData from './MostpopData';


const MostPopular = () => {
 
  
  return (
    <>
      <section>
        <div className='full_container'>
          <div className='hheading'>
            <h1>Hotels</h1>
          </div>
        </div>
      </section>
      
      {
        MostpopData.map((items)=>{
          return(
          <Popcard
          hotelname={items.hotelname}
          price={items.price}
          imagel={items.imagel}
          />
          )
        })
      }

      
     
    </>
  )
}

export default MostPopular;