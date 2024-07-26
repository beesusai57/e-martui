import React from 'react'
import { MenData } from '../data/Men'
import Navbar from '../components/Navbar'
const MenPage = () => {
  return (
    <>
   <Navbar />
    <div className='pageSection'>
        {MenData.map((item) => {
            return (
                <div>
                    <div className='pageImg'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='proModel'>
                        {item['Fit type']} {item['Neck Style']}

                    </div>
                </div>

            )

        })}

    </div>
    
    
    
    </>
  )
}

export default MenPage