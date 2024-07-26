import React from 'react'
import { useParams } from 'react-router-dom'
import { MoblieData } from '../stores/data/Moblies'
import Navbar from '../stores/components/Navbar'


const MobileSingle = () => {

    const { id } = useParams()
    const product = MoblieData.find((item) => item.id === id)
    console.log(id)
    return (
        <>
            <Navbar />

            <div className='ind-section'>
                <div className='ind-image'>
                    <img src={product.image} alt="" />
                </div>
                <div className='ind-details space'>
                    <div className='ind-company'>
                        <h2>{product.company}</h2>
                    </div>
                    <div className='ind-model space'>
                        <h3>{product.Model}</h3>
                    </div>
                    <div className='ind-price space'>
                        <h2>{product.price}</h2>
                    </div>
                    <div className='ind-desc space'>
                        <p>{product.description}</p>
                    </div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </>

        

    )
}

export default MobileSingle