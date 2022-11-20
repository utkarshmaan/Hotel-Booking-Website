import React from 'react';
import AllItem from '../../Destinations/Allitem';


const HomeDest=()=>{
    return(
        <>
         <section className='top popular'>
        {/* <div className='full_container'>
          <div>
            <h2>Destination</h2>
          </div>
         */}
        <AllItem />
      </section>
        </>
    )
}
export default HomeDest;