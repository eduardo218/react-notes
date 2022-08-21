import './search.styles.scss'
import { useContext, useState } from 'react'

import { NotesContext } from '../../contexts/notes.context'

const Search = () => {
  const {searchString, setSearchString} = useContext(NotesContext)
  

  const handleSearchField = (e) => {
    setSearchString(e.target.value)
  }

  return (
    <>
        <input 
          className='search-input' 
          type="text" 
          placeholder='Search for your notes'
          value={searchString}
          onChange={handleSearchField}
        />
    </>
  )
}

export default Search