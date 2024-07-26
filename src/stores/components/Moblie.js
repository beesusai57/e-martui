import React from 'react'
import { MoblieData } from '../data/Moblies'
import './Moblie.css'


const Moblie = () => {

  const firstFourImages = MoblieData.slice(0, 5)
  return (

    
    <>
    <h2>Moblies</h2>
    <div className='prosection'>
      {
        firstFourImages.map((item) => {
          return (
            <div className='imgBox'>
              <img className='proimage' src={item.image} alt="" />
            </div>
          )
        })
      }
    </div>
    </>
    
  )
}

export default Moblie
