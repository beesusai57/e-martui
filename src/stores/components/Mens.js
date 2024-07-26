

import React from 'react'
import { MenData } from '../data/Men'

const Mens = () => {

    const firstFourImages= MenData.slice(0, 5)
  return (

<>
    <h2>Mens Fashion</h2>
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

export default Mens
