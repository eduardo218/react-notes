
import { createContext, useState } from "react";

export const NotesContext = createContext({
    notes: [],
    searchString: [],
    setNotes: () => {},
    setSearchString: () => {},
    darkMode: false,
    setDarkMode: () => {}
})

export const NotesProvider = ({children}) => {
    const [ notes, setNotes ] = useState([])
    const [ searchString, setSearchString ] = useState([])
    const [ darkMode, setDarkMode ] = useState(false)

    const value = {notes, setNotes, searchString, setSearchString, darkMode, setDarkMode}

    return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}