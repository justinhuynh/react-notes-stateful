import React, { Component } from 'react';
import Folder from './Folder';

const FolderList = props => {
  let { folderList, selectedFolderId, handleFolderClick } = props;

  let folders = folderList.map((folder) => {
    let folderClass = folder.id === selectedFolderId ? "selected-folder folder" : "folder";

    let onFolderClick = () => { handleFolderClick(folder.id); }

    return(
      <Folder
        key={folder.id}
        folderClass={folderClass}
        folder={folder}
        handleFolderClick={onFolderClick}
      />
    );
  });

  return(
    <div className="folder-list">
      <ul>{folders}</ul>
    </div>
  )
}

export default FolderList;
