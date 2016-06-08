import React from 'react';

const Folder = props => {
  let { id, name, body } = props.folder;
  return(
    <li
      onClick={props.handleFolderClick}
      className={props.folderClass}
    >
      {name}
    </li>
  )
}

export default Folder;
