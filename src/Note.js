// src/Note.js
import React from 'react';

const Note = ({ id, text, onDelete, setCurrentNote }) => {
  const handleClick = () => {
    setCurrentNote(id);
  };

  return (
    <div className="note" onClick={handleClick}>
      <p>{text}</p>
      <button onClick={() => onDelete(id)}>Supprimer</button>
    </div>
  );
};

export default Note;
