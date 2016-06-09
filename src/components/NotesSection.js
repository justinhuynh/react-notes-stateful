import React, { Component } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NoteListControls from './NoteListControls';

class NotesSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFormValue: null,
      currentNoteValue: null,
      displayNotes: props.notes,
      selectedNoteId: props.selectedNoteId
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleNoteFormChange = this.handleNoteFormChange.bind(this);
  }

  handleSearchChange(event) {
    let { displayNotes, searchFormValue, selectedNoteId } = this.state;
    let newValue = event.target.value.toLowerCase();
    let filteredNotes = displayNotes;

    if (newValue) {
      filteredNotes = displayNotes.filter((note) => {
        return note.body.toLowerCase().includes(newValue);
      });

      selectedNoteId = filteredNotes[0] ? filteredNotes[0].id : null;
    }
    this.setState({
      searchFormValue: newValue,
      displayNotes: filteredNotes,
      selectedNoteId: selectedNoteId
    });
  }

  handleNoteFormChange(event) {
    // debugger;
    // this.props.onChange(Object.assign({}, this.props.value, {name: e.target.value}))
    let newValue = event.target.value;
    this.setState({ currentNoteValue: newValue });
  }

  render() {
    let { searchFormValue, currentNoteValue, displayNotes, selectedNoteId } = this.state;
    let notes = this.state.displayNotes;
    // let { notes, selectedNoteId } = this.props;

    // should this be in the handleSearchChange method?
    // if (searchFormValue) {
    //   notes = notes.filter((note) => {
    //     return note.body.toLowerCase().includes(searchFormValue);
    //   });
    //
    //   selectedNoteId = notes[0] ? notes[0].id : null
    // }

    let selectedNote = notes.find(note => {
      return note.id === selectedNoteId;
    });

    if (selectedNote) { currentNoteValue = currentNoteValue || selectedNote.body; }

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
          <NoteForm
            handleNoteUpdate={this.props.handleNoteUpdate}
            handleNoteDelete={this.props.handleNoteDelete}
            selectedNote={selectedNote}
            currentNoteValue={currentNoteValue}
            handleNoteFormChange={this.handleNoteFormChange}
          />
        </div>
      </div>
    )
  }
}

export default NotesSection;
