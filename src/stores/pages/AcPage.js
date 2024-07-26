 import React from 'react'
 import { AcData } from '../data/Ac'
import Navbar from '../components/Navbar'

 const AcPage = () => {
   return (
        <>
        <Navbar />
        <div className='pageSection'>
            {AcData.map((item) => {
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
 
 export default AcPage