import React from 'react';

const FolderForm = props => {
  return(
    <form className="folder-form" onSubmit={props.handleSubmit}>
      <div className="row collapse">
        <div className="small-2 columns">
          <input type="submit" value="+" className="button round"/>
        </div>
        <div className="small-10 columns">
          <input
            type="text"
            name="new_folder"
            placeholder="New Folder"
            onChange={props.handleChange}
            value={props.folderFormValue}
          />
        </div>
      </div>
    </form>
  )
}

export default FolderForm;
