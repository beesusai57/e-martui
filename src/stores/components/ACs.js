
import React from 'react'
import { AcData } from '../data/Ac'

const ACs = () => {

    const firstFourImages= AcData.slice(0, 5)

  return (
    <>
    <h2>AC</h2>
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

export default ACs
