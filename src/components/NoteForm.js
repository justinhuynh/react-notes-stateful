import React from 'react';

const NoteForm = props => {
  return(
    <div className="note-form">
      NoteForm
      <button className="button note-button" value="Update">Update</button>
      <button className="button note-button" value="Delete">Delete</button>
      <textarea name="note_text">
      </textarea>
    </div>
  );
}

export default NoteForm;
