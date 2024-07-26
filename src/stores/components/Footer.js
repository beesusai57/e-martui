
import React from 'react'
import './Footer.css'


const Footer = () => {
  return (

    <div className="footer">
      <div className="top">

        <div>
          <h1>FLIPKART DEALS</h1>
          <p>Shopping is Coming to Your Home</p>


        </div>

        <div>

          <a href='/'>
          <i class="fa-brands fa-square-facebook"></i>
          </a>

          <a href='/'>
          <i class="fa-brands fa-instagram"></i>
          </a>

          <a href='/'>
          <i class="fa-brands fa-square-behance"></i>
          </a>

          <a href='/'>
          <i class="fa-brands fa-square-twitter"></i>
          </a>

          <a href='/'>
          <i class="fa-brands fa-square-youtube"></i>
          </a>

        </div>
      </div>
      <div className="bottom">

        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>

        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Twitter</a>
          <a href="/">All Versions</a>


        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleleshooting</a>
          <a href="/">Contact Us</a>

        </div>

        <div>

          <h4>Others</h4>
          <a href="/">Terms of Services</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>

  )
}

export default Footer