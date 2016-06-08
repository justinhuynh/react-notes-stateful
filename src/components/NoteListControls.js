import React from 'react';

const NoteListControls = props => {
  return(
    <div className="row collapse note-list-controls">
      <div className="small-3 columns">
        <button className="button" onClick={props.handleNoteSubmit}>
          New Note
        </button>
      </div>
      <form onSubmit={event => event.preventDefault()}>
        <span className="search-wrapper">
          <input
            onChange={props.handleSearchChange}
            placeholder="Search term"
            value={props.searchFormValue} />
        </span>
      </form>
    </div>
  )
}

export default NoteListControls;
