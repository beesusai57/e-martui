import React from 'react'
import { MoblieData } from '../data/Moblies'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MobilePage = () => {
    return (
        <>
        
        <Navbar />
        <div className='pageSection'>
            {MoblieData.map((item) => {
                return (
                    <div>
                      <Link to ={`/mobiles/${item.id}`}>
                      <div className='pageImg'>
                            <img src={item.image} alt="" />
                        </div>
                      </Link>
                        <div className='proModel'>
                            {item.company} {item.Model}

                        </div>
                    </div>

                )

            })}

        </div>
        
        
        
        </>
    )
}

export default MobilePage