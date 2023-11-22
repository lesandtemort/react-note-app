// src/Sidebar.js
import React from 'react';

const Sidebar = ({ notes, setCurrentNote }) => {
  return (
    <div className="sidebar">
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id} onClick={() => setCurrentNote(note.id)}>
            {note.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
