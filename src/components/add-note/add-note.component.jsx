import './add-note.styles.scss'

import { useState, useContext } from 'react'
import { nanoid } from 'nanoid'

import { NotesContext } from '../../contexts/notes.context'
import Button from '../button/button.component'


const AddNote = () => {
    const charLimit = 100
    const [ noteToAdd, setNoteToAdd ] = useState('')
    const [ remaining, setRemaining ] = useState(charLimit)
    const { notes, setNotes } = useContext(NotesContext)
    

    const handleTextArea = (e) => {
        const textToAdd = e.target.value
        if(charLimit - textToAdd.length >= 0) {            
            setNoteToAdd(textToAdd)   
            setRemaining(charLimit - textToAdd.length)                       
        }    
        
          
    }

    const handleSaveButton = () => {
        if (noteToAdd){
            const newNotes = [...notes, {
                id: nanoid(),
                text: noteToAdd,
                date: new Date().toLocaleDateString()
            }]
    
            setNotes(newNotes)
            setNoteToAdd('')
            setRemaining(charLimit)
        }        
    }

  return (
    <div className='add-note-container'>
        <textarea 
            className='add-note-text' 
            placeholder='type to add a new note...'
            value={noteToAdd}
            onChange={handleTextArea}
        />
        <div className='add-note-footer'>
            <span className='add-note-counter'>{remaining} Remaining</span>
            <Button onClick={handleSaveButton}>Save</Button>
        </div>
    </div>
  )
}

export default AddNote