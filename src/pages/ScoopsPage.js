import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ScoopsPage = ({ darkMode, setDarkMode }) => {
  return (
    <div id="scoops">
      <Header />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default ScoopsPage