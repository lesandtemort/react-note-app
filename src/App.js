// src/App.js
import React, { useState } from 'react';
import './App.css';
import Note from './Note';
import Sidebar from './Sidebar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  const addNote = () => {
    const newNote = { id: uuidv4(), text: 'Nouvelle note' };
    setNotes([newNote, ...notes]); // Mettez la nouvelle note en premier
    setCurrentNote(newNote.id);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    setCurrentNote(null);
  };

  const updateNoteText = (id, newText) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, text: newText } : note)));
  };

  return (
    <div className="App">
      <h1>Bloc-notes</h1>
      <button onClick={addNote}>Nouvelle Note</button>
      <div className="note-container">
        <Sidebar notes={notes} setCurrentNote={setCurrentNote} />
        <div className="current-note">
          {currentNote !== null && (
            <>
              <h2>Note actuelle</h2>
              <textarea
                value={notes.find((note) => note.id === currentNote)?.text || ''}
                onChange={(e) => updateNoteText(currentNote, e.target.value)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
