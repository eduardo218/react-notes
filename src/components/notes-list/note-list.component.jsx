import './note-list.styles.scss'
import { useContext, useEffect } from 'react';

import { NOTES_DATABASE } from '../../notes-db';

import { NotesContext } from '../../contexts/notes.context';
import Note from "../note/note.component";

import React from 'react'
import AddNote from '../add-note/add-note.component';

const NoteList = () => {
    const { notes, setNotes, searchString} = useContext(NotesContext)

    useEffect(() => {
        setNotes(NOTES_DATABASE)
    }, [])

  return (
    <div className="note-list-container">
        {
            notes.map((note) => {
                const {id, text, date} = note
                if(text.toLowerCase().includes(searchString)){
                    return <Note id={id} text={text} date={date} key={id}/>
                }
            })
        }

        <AddNote />
    </div>
  )
}

export default NoteList