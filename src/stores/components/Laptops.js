
import React from 'react'
import { LaptopData } from '../data/Laptop'

const Laptops = () => {

    
  const firstFourImages= LaptopData.slice(0, 5)
  
  return (
    <>
    <h2>Laptops</h2>
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

export default Laptops
