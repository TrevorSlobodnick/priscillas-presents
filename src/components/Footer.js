import React from 'react'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

const Footer = ({ darkMode, setDarkMode }) => {
  return (
    <footer>
        <p>Quis ipsum voluptate consequat amet tempor pariatur. Officia laboris amet tempor sint laborum adipisicing. Laboris laboris culpa aliqua anim voluptate velit dolor dolore quis in. Sint incididunt cillum ut Lorem ad esse ad occaecat commodo exercitation aliquip. Non enim labore elit mollit Lorem laborum labore ut cupidatat nulla eiusmod magna aliquip eiusmod. Ullamco aliquip labore in eu non velit sunt elit magna pariatur deserunt occaecat.</p>
        <p>Quis ipsum voluptate consequat amet tempor pariatur. Officia laboris amet tempor sint laborum adipisicing. Laboris laboris culpa aliqua anim voluptate velit dolor dolore quis in. Sint incididunt cillum ut Lorem ad esse ad occaecat commodo exercitation aliquip. Non enim labore elit mollit Lorem laborum labore ut cupidatat nulla eiusmod magna aliquip eiusmod. Ullamco aliquip labore in eu non velit sunt elit magna pariatur deserunt occaecat.</p>
        <div id='dark-mode-wrapper'>
            <div>Dark Mode:</div>
            <Toggle className='dark-mode-toggle' name='darkMode' value="yes" checked={darkMode} onChange={() => setDarkMode(prev => !prev)} />
        </div>
    </footer>
  )
}

export default Footer