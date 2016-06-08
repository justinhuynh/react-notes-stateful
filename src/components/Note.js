import React from 'react';

const Note = ({ note }) => {
  return (
    <div className="note" id={note.id}>
      {note.body}<br />
      {note.date}
    </div>
  )
}

export default Note;
