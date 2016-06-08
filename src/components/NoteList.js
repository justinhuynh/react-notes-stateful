import React from 'react';
import Note from './Note';

const NoteList = (props) => {
  let { notes, handleNoteClick, selectedNoteId } = props;

  let noteList = notes.map((note) => {
    let onNoteClick = () => { handleNoteClick(note.id); }
    let noteClass = note.id === selectedNoteId ? "selected-note note" : "note";
    return (
      <li key={note.id} className={noteClass} onClick={onNoteClick}>
        <Note note={note} />
      </li>
    )
  });

  return (
    <ul>{noteList}</ul>
  )
}

export default NoteList;
