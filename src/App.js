import './App.scss'

import React, { useContext } from 'react'
import Header from './components/header/header.component'
import Search from './components/search/search.component'
import NoteList from './components/notes-list/note-list.component'

import { NotesContext } from './contexts/notes.context'


const App = () => {
  const { darkMode } = useContext(NotesContext)
  return (
    <main className={darkMode ? 'dark-mode' : ''}>
      <div className='container'>
        <Header />
        <Search />
        <NoteList />
      </div>
    </main>
  )
}

export default App