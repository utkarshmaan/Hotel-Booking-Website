import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Sdata from '../components/Destinations/Sdata'
import Emptyfile from "../common/Emptyfile/Emptyfile"
import { useParams } from "react-router-dom"
import HeadTitle from '../common/HeadTitle/HeadTitle'
import './Singlepage.css'

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      <HeadTitle />

      {item ? (
        <section className='single-page top'>
          <div className='container'>
            <article className='content flex'>
              <div className='main-content'>
                <img src={item.image} alt='dest' />
                <p>{item.desc}</p>

                <div className='para flex_space'>
                  <p>{item.sidepara}</p>
                </div>
                <h1>Whta is the {item.title} City ?</h1>
                <p>{item.desc}</p>

                <div className='image grid1 '>
                  <img src={item.paraImage_one} alt='' />
                  <img src={item.paraImage_two} alt='' />
                </div>
              </div>

              
              <div className='side-content'>
                <div className='box'>
                  <h2>How can we help you?</h2>
                  <button className='outline-btn'>
                    <Link to='/contact'><i className='fa fa-phone-alt'>Contact Us</i></Link>
                  </button>
                </div>
              </div>
              
            </article>
          </div>
        </section>
      ) : (
        <Emptyfile />
      )}
    </>
  )
}

export default SinglePage