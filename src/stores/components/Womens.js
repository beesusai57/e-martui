

import React from 'react'
import { WomenData } from '../data/Women'

const Womens = () => {

    
    const firstFourImages= WomenData.slice(0, 5)

  return (

    <>
    <h2>Womens Fashion</h2>
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

export default Womens
