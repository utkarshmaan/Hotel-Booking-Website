import React from 'react'
import Hero from "../HomeSection/Hero";
import HomeAbout from '../HomeSection/HomeAbout';
import HomeDest from '../HomeSection/HomeDest/HomeDest';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.js'
import MostPopular from '../popular/Mostpop'
import Getapp from '../Getapp/Getapp';

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout/>
      
      <MostPopular/>
      <HomeDest/>
      <Getapp/>
    </>
  )
}

export default Home