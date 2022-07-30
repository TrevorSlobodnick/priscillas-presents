import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PriscillasContent from '../components/PriscillasContent'

const PriscillasPage = ({ darkMode, onSetDarkMode }) => {
  return (
    <div id="priscillas">
      <Header />
      <PriscillasContent />
      <Footer darkMode={darkMode} onSetDarkMode={onSetDarkMode} />
    </div>
  )
}

export default PriscillasPage