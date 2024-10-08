import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'
import LoginPopup from './components/LoginPopup'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {
      showLogin && <LoginPopup setShowLogin={setShowLogin} />
    }

    <div className='px-8 min-w-screen min-h-screen overflow-hidden lg:max-w-[90%] xl:max-w-[80%] md:mx-auto lg:p-0'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App