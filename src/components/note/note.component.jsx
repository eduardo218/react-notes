import './note.styles.scss'
import { useContext } from 'react'
import { NotesContext } from '../../contexts/notes.context'

const Note = ({text, date, id}) => {
    const {notes, setNotes} = useContext(NotesContext)

    const HandleRemoveNote = () => {
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
    }

  return (
    <div className='note-container'>
        <div className='note-text'>
            {text}
        </div>
        <div className='note-footer'>
            <span className='note-date'>{date}</span>
            <span className='note-remove' onClick={HandleRemoveNote}>X</span>
        </div>
    </div>
  )
}

export default Note