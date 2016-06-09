import React from 'react';

const NoteForm = props => {
  let { handleNoteUpdate, handleNoteDelete, selectedNote, currentNoteValue } = props;

  // starting value should always be selectedNote.body
  let selectedNoteValue = selectedNote ? selectedNote.body : null;

  return (
    <div className="note-form">
      NoteForm
      <div className="row">
        <div className="small-12 columns">
          <button
            className="button note-button"
            onClick={props.handleNoteUpdate}>
            Update
          </button>
          <button
            className="button note-button"
            onClick={props.handleNoteDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className="row">
        <div className="small-12 columns">
          <textarea
            name="note_text"
            onChange={props.handleNoteFormChange}
            value={currentNoteValue}
          >
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default NoteForm;
