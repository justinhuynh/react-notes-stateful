import React from 'react';

const Note = ({ note }) => {
  let trimmedNote =
    note.body.length > 35 ? `${note.body.substring(0, 34)}...` : note.body;
  return (
    <div className="note" id={note.id}>
      {trimmedNote}<br />
      {note.date}
    </div>
  )
}

export default Note;
