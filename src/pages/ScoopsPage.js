import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScoopsContent from '../components/ScoopsContent'

const ScoopsPage = ({ darkMode, onSetDarkMode }) => {
  return (
    <div id="scoops">
      <Header />
      <ScoopsContent />
      <Footer darkMode={darkMode} onSetDarkMode={onSetDarkMode} />
    </div>
  )
}

export default ScoopsPage