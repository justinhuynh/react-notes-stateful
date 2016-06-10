import React from 'react';

const NoteForm = props => {
  let { handleNoteUpdate, handleNoteDelete, selectedNote, currentNoteValue, handleNoteFormChange } = props;

  // starting value should always be selectedNote.body
  let selectedNoteValue = selectedNote.body;

  let updateNote = () => handleNoteUpdate(selectedNote.id);
  let deleteNote = () => handleNoteDelete(selectedNote.id);

  return (
    <div className="note-form">
      NoteForm
      <div className="row">
        <div className="small-4 columns">
          Updated on {selectedNote.date}
        </div>
        <div className="small-8 columns">
          <button
            className="button note-button"
            onClick={updateNote}>
            Update
          </button>
          <button
            className="button note-button"
            onClick={deleteNote}>
            Delete
          </button>
        </div>
      </div>
      <div className="row">
        <div className="small-12 columns">
          <textarea
            name="note_text"
            onChange={handleNoteFormChange}
            defaultValue={selectedNoteValue}
            value={currentNoteValue}
          >
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default NoteForm;
