import React, { Component } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NoteListControls from './NoteListControls';


// need some kind of listener on selectedFolderId
// basically, whenever the selectedFolderId changes, the form content needs to update as well

// keep working on handleNoteFormChange
// basically, the value of the form is tied to state
// the value of the form needs to depend on:
// 1) immediately after the selectedFolderId is changed, the form should show selectedNote.body
// 2) for all noteFormChange events afterwards, it should reflect the form updating (currentNoteValue)

// the problem is with setting a "default" value that appears only once, and is able to change subsequently
// this "default" value needs to be set every time the selectedFolderId is changed

class NotesSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNoteValue: null
      // make "selected note part of the state"
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    let newValue = event.target.value.toLowerCase();
    this.setState({ searchFormValue: newValue });
  }

  render() {
    let { searchFormValue } = this.state;
    let { notes, selectedNoteId, handleNoteFormChange, handleNoteUpdate, handleNoteDelete, currentNoteValue } = this.props;
    let noteForm;

    // should this be in the handleSearchChange method?
    if (searchFormValue) {
      notes = notes.filter((note) => {
        return note.body.toLowerCase().includes(searchFormValue);
      });

      selectedNoteId = notes[0] ? notes[0].id : null
    }

    let selectedNote = notes.find(note => {
      return note.id === selectedNoteId;
    });

    if (selectedNote) {
      currentNoteValue = currentNoteValue || selectedNote.body;
      noteForm = <NoteForm
                  handleNoteUpdate={handleNoteUpdate}
                  handleNoteDelete={handleNoteDelete}
                  selectedNote={selectedNote}
                  currentNoteValue={currentNoteValue}
                  handleNoteFormChange={handleNoteFormChange}
                />
    } else {
      noteForm = null;
    }

    return (
      <div className="row notes-section">
        <div className="small-6 columns notes-list">
          <NoteListControls
            searchFormValue={this.state.searchFormValue}
            handleSearchChange={this.handleSearchChange}
            handleNoteSubmit={this.props.handleNoteSubmit}
          />
          <NoteList
            notes={notes}
            handleNoteClick={this.props.handleNoteClick}
            selectedNoteId={selectedNoteId}
          />
        </div>
        <div className="small-6 columns">
          {noteForm}
        </div>
      </div>
    )
  }
}

export default NotesSection;
