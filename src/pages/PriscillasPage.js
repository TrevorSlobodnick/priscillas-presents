import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const PriscillasPage = ({ darkMode, setDarkMode }) => {
  return (
    <div id="priscillas">
      <Header />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default PriscillasPage