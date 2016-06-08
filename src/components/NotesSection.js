import React, { Component } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NoteListControls from './NoteListControls';

class NotesSection extends Component {
  constructor(props) {
    super(props);
    let selectedNoteId = null;

    if (props.notes[0]) { selectedNoteId = props.notes[0].id }

    this.state = { selectedNoteId }

    this.handleNoteClick = this.handleNoteClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleNoteSubmission = this.handleNoteSubmission.bind(this);
  }

  handleNoteSubmission(event) {
    let newNoteId = Date.now();
    this.props.handleNoteSubmit(event, newNoteId);
    this.setState({ selectedNoteId: newNoteId })
  }

  handleNoteClick(id) {
    this.setState({ selectedNoteId: id });
  }

  handleSearchChange(event) {
    let newValue = event.target.value.toLowerCase();
    this.setState({ searchFormValue: newValue });
  }

  updateFolderState() {
    if (this.props.notes[0]) {
      this.setState({
        selectedNoteId: notes[0].id,
        folderChange: false
      })
    }
  }

  render() {
    let { searchFormValue, selectedNoteId } = this.state;
    let { notes } = this.props;

    if (searchFormValue) {
      notes = notes.filter((note) => {
        return note.body.toLowerCase().includes(searchFormValue);
      });
    }

    // props
    if (this.state.folderChange && notes[0]) {
      updateFolderState();
    }
    // let noteIds = notes.map(note => { return note.id });

    return (
      <div className="row notes-section">
        <div className="small-6 columns notes-list">
          <NoteListControls
            searchFormValue={this.state.searchFormValue}
            handleSearchChange={this.handleSearchChange}
            handleNoteSubmit={this.handleNoteSubmission}
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
