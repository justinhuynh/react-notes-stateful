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
      selectedFolder: null,
      currentNoteValue: null
    };

    this.handleFolderSubmit = this.handleFolderSubmit.bind(this);
    this.handleFolderClick = this.handleFolderClick.bind(this);
    this.handleFolderFormChange = this.handleFolderFormChange.bind(this);
    this.handleNoteSubmit = this.handleNoteSubmit.bind(this);
    this.handleNoteClick = this.handleNoteClick.bind(this);
    this.handleNoteUpdate = this.handleNoteUpdate.bind(this);
    this.handleNoteDelete = this.handleNoteDelete.bind(this);
    this.handleNoteFormChange = this.handleNoteFormChange.bind(this);
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
    let currentFolder = this.state.folderList.find(folder => {
      return folder.id === id;
    });

    let selectedNoteId = null;

    if (currentFolder.noteIds.length) {
      selectedNoteId = currentFolder.noteIds[0];
    }

    this.setState({
      selectedFolderId: id,
      selectedNoteId: selectedNoteId
    });
  }

  handleFolderFormChange(event) {
    let newValue = event.target.value;
    this.setState({ folderFormValue: newValue });
  }

  handleNoteClick(id) {
    this.setState({ selectedNoteId: id });
  }

  handleNoteUpdate(id) {
    let noteToUpdate = this.state.noteList.find((note) => {
      return note.id === id;
    });

    let currentDate = new Date();

    let updatedNote = {
      body: this.state.currentNoteValue,
      date: currentDate.toLocaleDateString()
    }

    Object.assign(noteToUpdate, updatedNote);
    this.setState({currentNoteValue: null})
  }

  handleNoteDelete(id) {
    let { noteList, folderList, selectedFolderId } = this.state;

    let newNoteList = noteList.filter(note => {
      return note.id !== id;
    });

    let selectedFolder = folderList.find(folder => {
      return folder.id === selectedFolderId;
    });

    let newFolderNoteIds = selectedFolder.noteIds.filter(noteId => {
      return noteId !== id;
    })

    selectedFolder.noteIds = newFolderNoteIds;

    this.setState({
      noteList: newNoteList
    });
  }

  handleNoteFormChange(event) {
    let newValue = event.target.value;
    this.setState({ currentNoteValue: newValue });
  }

  handleNoteSubmit(event) {
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

    this.setState({
      noteList: newNoteList,
      selectedNoteId: newNote.id
   });
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

    return (
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
            selectedNoteId={this.state.selectedNoteId}
            handleNoteClick={this.handleNoteClick}
            handleNoteSubmit={this.handleNoteSubmit}
            handleNoteUpdate={this.handleNoteUpdate}
            handleNoteDelete={this.handleNoteDelete}
            handleNoteFormChange={this.handleNoteFormChange}
            currentNoteValue={this.state.currentNoteValue}
          />
        </div>
      </div>
    )
  }
}

export default App;
