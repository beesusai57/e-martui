import React from 'react'
import { LaptopData } from '../data/Laptop'
import Navbar from '../components/Navbar'

const LaptopPage= () => {
  return (
    <>
    <Navbar />
    <div className='pageSection'>
        {LaptopData.map((item) => {
            
            return (
                <div>
                
                <div className='pageImg'>
                        <img src={item.image} alt="" />
                    </div>
               
                    <div className='proModel'>
                        {item.company} {item.model}

                    </div>
                </div>

            )

        })}

    </div>
    </>
  )
}

export default LaptopPage