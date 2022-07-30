import React from 'react'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

const Footer = ({ darkMode, onSetDarkMode }) => {
  return (
    <footer>
        <div id='dark-mode-wrapper'>
            <div>Dark Mode:</div>
            <Toggle className='dark-mode-toggle' name='darkMode' value="yes" checked={darkMode} onChange={() => onSetDarkMode(darkMode)} />
        </div>
    </footer>
  )
}

export default Footer