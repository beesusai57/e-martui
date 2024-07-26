import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <div className="navsection">
                <div className="title">
                       <img src='Ac/R.jpg' alt="" />
                </div>
                <div className="search">
                    <input type="text" placeholder='Search...' />
                </div>
                <div className="user">
                     SignIn/SignUp
                     </div>
                <div className=" cart">
                   Cart
                </div>

                
            </div>
            <div className='submenu'>
                <ul>
                    <Link to ="/sample">
                    <li>Moblies</li>
                    </Link>
                   <Link to ="/Laptop">
                   <li>Laptops</li>
                   </Link>
                   <Link to ="/watch">
                   <li>Watches</li>
                   </Link>
                    <Link to = "/Men">
                    <li>Mens Fashion</li>
                    </Link>
                    <Link to ="/Women">
                    <li>Women Dressing</li>
                    </Link>
                 <Link to = "/Ac">
                 <li>Ac</li>

                 </Link>
                  <Link to = "/FR">
                  <li>Furniture</li>
                  </Link>
                    



                </ul>

            </div>
        </>


    )
}

export default Navbar
