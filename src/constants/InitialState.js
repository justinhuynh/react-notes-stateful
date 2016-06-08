const InitialState = {
  folderList: [
    { id: 1, name: "folder 1", noteIds: [1, 2, 3] },
    { id: 2, name: "folder 2", noteIds: [4, 5] }
  ],
  noteList: [
    {
      id: 1,
      body: "Whiskr - It's like Tindr but for cats",
      date: "6/7/2016"
    },
    {
      id: 2,
      body: "something else",
      date: "6/7/2016"
    },
    {
      id: 3,
      body: "something other",
      date: "6/7/2016"
    },
    {
      id: 4,
      body: "yet another note something other",
      date: "6/7/2016"
    },
    {
      id: 5,
      body: "yay! yet another note something other",
      date: "6/7/2016"
    }
  ],
  selectedFolderId: 1 // find better way to set default value
}

export default InitialState;
