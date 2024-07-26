import React from 'react'
import Navbar from '../components/Navbar'
import { FurnitureData } from '../data/Furniture'

const FurniturePage = () => {
  return (
    <>
  <Navbar />
    <div className='pageSection'>
        {FurnitureData.map((item) => {
            return (
                <div>
                    <div className='pageImg'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='proModel'>
                        {item.title} {item.author}

                    </div>
                </div>

            )

        })}

    </div>
    
    
    
    </>
  )
}

export default FurniturePage