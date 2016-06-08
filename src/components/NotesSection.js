import React, { Component } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NoteListControls from './NoteListControls';

class NotesSection extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedNoteId: null }

    this.handleNoteClick = this.handleNoteClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleNoteClick(id) {
    this.setState({ selectedNoteId: id });
  }

  handleSearchChange(event) {
    let newValue = event.target.value.toLowerCase();
    this.setState({ searchFormValue: newValue });
  }

  render() {
    let { searchFormValue, selectedNoteId } = this.state;
    let { notes } = this.props;

    if (searchFormValue) {
      notes = notes.filter((note) => {
        return note.body.toLowerCase().includes(searchFormValue);
      });
    }

    let noteIds = notes.map(note => { return note.id });

    if (!noteIds.includes(selectedNoteId) && notes.length) {
      selectedNoteId = notes[0].id;
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
            handleNoteClick={this.handleNoteClick}
            selectedNoteId={selectedNoteId}
          />
        </div>
        <div className="small-6 columns">
          <NoteForm />
        </div>
      </div>
    )
  }
}

export default NotesSection;
