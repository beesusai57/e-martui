import React from 'react'
import { WomenData } from '../data/Women'
import Navbar from '../components/Navbar'

const WomenPage = () => {
  return (
    <>
    <Navbar />
   
    <div className='pageSection'>
        {WomenData.map((item) => {
            return (
                <div>
                    <div className='pageImg'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='proModel'>
                        {item.title} {item.description}

                    </div>
                </div>

            )

        })}

    </div>
    
    
    
    </>
  )
}

export default WomenPage