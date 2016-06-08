import React, { Component } from 'react';
import FolderList from './FolderList';
import FolderForm from './FolderForm';
import NotesSection from './NotesSection';
import InitialState from '../constants/InitialState';

// d = new Date();
// current_date_formatted = d.toLocaleDateString();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folderList: [],
      noteList: [],
      selectedFolder: null
    };

    this.handleFolderSubmit = this.handleFolderSubmit.bind(this);
    this.handleFolderClick = this.handleFolderClick.bind(this);
    this.handleFolderFormChange = this.handleFolderFormChange.bind(this);
    this.handleNoteSubmit = this.handleNoteSubmit.bind(this);
  }

  newFolderId() {
    let folderIds = [0];
    let { folderList } = this.state;

    if (folderList.length) {
      folderIds = folderList.map((folder) => { return folder.id; });
    }

    return Math.max(...folderIds) + 1;
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
    let newFolder = this.state.folderList.find((folder) => {
      return folder.id === id;
    });

    this.setState({ selectedFolderId: id });
  }

  handleFolderFormChange(event) {
    let newValue = event.target.value;
    this.setState({ folderFormValue: newValue });
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

    currentFolder.noteIds.push(newNote.id);

    this.setState({ noteList: newNoteList });
  }

  render() {
    let { folderList, selectedFolderId, noteList } = this.state;
    let notes = noteList;

    if (selectedFolderId) {
      let selectedFolder = folderList.find(folder => {
        return folder.id === selectedFolderId;
      });

      notes = selectedFolder.noteIds.map(noteId => {
        return noteList.find(note => {
          return note.id === noteId;
        });
      });
    }

    return(
      <div className="row">
        <div className="small-4 columns">
          <FolderList
            folderList={folderList}
            selectedFolderId={selectedFolderId}
            handleFolderClick={this.handleFolderClick}
          />
          <FolderForm
            folderFormValue={this.state.folderFormValue}
            handleChange={this.handleFolderFormChange}
            handleSubmit={this.handleFolderSubmit}
          />
        </div>
        <div className="small-8 columns">
          <NotesSection
            notes={notes}
            handleNoteSubmit={this.handleNoteSubmit}
          />
        </div>
      </div>
    )
  }
}

export default App;
