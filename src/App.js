
import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import LaptopPage from './stores/pages/LaptopPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomenPage from './stores/pages/WomenPage'
import AcPage from './stores/pages/AcPage'
import FurniturePage from './stores/pages/FurniturePage'
import MobileSingle from './Singles/MobileSingle'

const App = () => {
  return (
    <div>
      
      <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/sample' element={<MobilePage />} />
        <Route path='/Laptop' element={<LaptopPage />} />
        <Route path='/watch' element={<WatchPage />} />
        <Route path='/Men' element={<MenPage />} />
        <Route path='/Women' element={<WomenPage />} />
        <Route path='/Ac' element={<AcPage />} />
        <Route path='/FR' element={<FurniturePage />} />
            <Route path ='/mobiles/:id' element ={<MobileSingle/>}/>
      </Routes>
    
    </div>
  )
}

export default App
