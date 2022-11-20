import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from '../../common/HeadTitle/HeadTitle'

const About = () => {
  return (
    <>
      <HeadTitle />


      <div className="about-text">
    <h1>About Us</h1>
      <h2>We connects millions of travellers with memorable experiences, a range of transport options and incredible places to stay - from homes to hotels and much more. As one of the world's largest travel marketplaces for both 
      established brands and entrepreneurs of all sizes, we enables properties all over the world to reach a global audience and grow their businesses.</h2>
    </div>
      <section className='about'>
        <div className='a-container'>
          <AboutCard />
        </div>
      </section>

      
      <section className='features top'>
        <div className='a-container aboutCard flex_space'>
          <div className='row row1'>
            <h1>Our Features</h1>
            <p>We provides tools that make it easy for you to set up and manage a Listing.
            No matter where you want to go or what you want to do, we makes it easy and backs it all up with 24/7 customer support.</p>
            <p>You will receive administrative communications from us using the email address or other contact information you provide for your account.</p>
            
          </div>
          <div className='row image'>
            <img src='https://www.vision51.co.uk/wp-content/uploads/2016/02/serv-img3.jpg' alt='' className="img-mov2"/>
           
          </div>
        </div>
      </section>

     
    </>
  )
}

export default About;