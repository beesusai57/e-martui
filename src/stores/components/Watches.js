
import React from 'react'
import { WatchData } from '../data/Watch'


const Watch = () => {

  const firstFourImages = WatchData.slice(0, 5)
  
  return (
  <>
  <h2>Watches</h2>
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

export default Watch
