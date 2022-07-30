import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScoopsContent from '../components/ScoopsContent'

const ScoopsPage = ({ darkMode, setDarkMode }) => {
  return (
    <div id="scoops">
      <Header />
      <ScoopsContent />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default ScoopsPage