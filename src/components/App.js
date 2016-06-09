import React, { Component } from 'react';
import FolderList from './FolderList';
import FolderForm from './FolderForm';
import NotesSection from './NotesSection';
import InitialState from '../constants/InitialState';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folderList: [],
      noteList: [],
      selectedFolderId: null,
      displayNotes: []
    };

    this.handleFolderSubmit = this.handleFolderSubmit.bind(this);
    this.handleFolderClick = this.handleFolderClick.bind(this);
    this.handleFolderFormChange = this.handleFolderFormChange.bind(this);
    this.handleNoteSubmit = this.handleNoteSubmit.bind(this);
    this.handleNoteClick = this.handleNoteClick.bind(this);
    this.handleNoteUpdate = this.handleNoteUpdate.bind(this);
    this.handleNoteDelete = this.handleNoteDelete.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleFolderSubmit(event) {
    event.preventDefault();
    let newFolder = {
      id: Date.now(),
      name: this.state.folderFormValue,
      noteIds: []
    }

    let newFolderList = [...this.state.folderList, newFolder];

    this.setState({
      folderList: newFolderList,
      folderFormValue: "",
      selectedFolderId: newFolder.id
    });
  }

  handleFolderClick(id) {
    let { folderList, noteList } = this.state;

    let selectedFolder = folderList.find(folder => {
      return folder.id === id;
    });

    let displayNotes = [];
    let selectedNoteId = null;

    if (selectedFolder.noteIds[0]) {
       displayNotes = selectedFolder.noteIds.map(noteId => {
        return noteList.find(note => {
          return note.id === noteId;
        });
      });

      selectedNoteId = selectedFolder.noteIds[0];
    }

    this.setState({
      selectedFolderId: id,
      selectedNoteId: selectedNoteId,
      displayNotes: displayNotes
    });
  }

  handleFolderFormChange(event) {
    let newValue = event.target.value;
    this.setState({ folderFormValue: newValue });
  }

  handleNoteClick(id) {
    this.setState({ selectedNoteId: id });
  }

  handleNoteUpdate(id, content) {
    debugger;
  }

  handleNoteDelete(id) {
    debugger;
  }

  handleNoteSubmit(event) {
    // make the new note button greyed out until they add a folder
    // block action until folderList exists
    event.preventDefault();

    let currentDate = new Date();

    let newNote = {
      id: Date.now(),
      body: "New Note",
      date: currentDate.toLocaleDateString()
    }

    let newNoteList = [...this.state.noteList, newNote]

    let currentFolder = this.state.folderList.find(folder => {
      return folder.id === this.state.selectedFolderId;
    });

    // mutability issues?
    currentFolder.noteIds.push(newNote.id);


    // update display notes
    this.setState({
      noteList: newNoteList,
      selectedNoteId: newNote.id
    });
  }

  handleSearchChange(event) {
    let newValue = event.target.value.toLowerCase();
    this.setState({
      searchFormValue: newValue
    });
  }

  render() {
    let { folderList, displayNotes, folderFormValue, selectedNoteId, selectedFolderId } = this.state;
    return (
      <div className="row">
        <div className="small-4 columns">
          <FolderList
            folderList={folderList}
            selectedFolderId={selectedFolderId}
            handleFolderClick={this.handleFolderClick}
          />
          <FolderForm
            folderFormValue={folderFormValue}
            handleChange={this.handleFolderFormChange}
            handleSubmit={this.handleFolderSubmit}
          />
        </div>
        <div className="small-8 columns">
          <NotesSection
            notes={displayNotes}
            selectedNoteId={selectedNoteId}
            handleNoteClick={this.handleNoteClick}
            handleNoteSubmit={this.handleNoteSubmit}
            handleNoteUpdate={this.handleNoteUpdate}
            handleNoteDelete={this.handleNoteDelete}
            handleSearchChange={this.handleSearchChange}
          />
        </div>
      </div>
    )
  }
}

export default App;
