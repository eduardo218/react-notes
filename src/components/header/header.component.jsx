import React, { useContext } from 'react'
import './header.styles.scss'

import Button from '../button/button.component'

import { NotesContext } from '../../contexts/notes.context'

const Header = () => {
  const { darkMode, setDarkMode } = useContext(NotesContext)
  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className='header-container'>
        <h1 className={darkMode ? 'dark-mode' : ''}><span>React</span> Notes</h1>
        <Button onClick={handleDarkMode}>Toogle Mode</Button>
    </div>
  )
}

export default Header