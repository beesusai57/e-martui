

import React from 'react'
import { FurnitureData } from '../data/Furniture'

const Furnitures = () => {


    const firstFourImages= FurnitureData.slice(0, 5)
  return (
    <>
    <h2>Furnitures</h2>
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

export default Furnitures
