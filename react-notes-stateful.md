As you may recall, you have been hired to create the following notes application:

![React Notes Stateful 0][react-notes-stateful-0]

The left pane shows a list of folders which contain notes.
The currently selected folder is highlighted in blue.
At the bottom of the left pane, there is a form to create a new folder.

The middle pane displays the list of notes in the current folder.
The currently selected note is highlighted in yellow.
At the top of the middle pane, there is a button to create a new note in the currently selected folder as well as a search bar.
Typing into the search bar would change the notes displayed in the list to those whose content matches the search bar input.

The right pane is a form to update the currently selected note.
The users would type into the `textarea` element of the form and click on the update button to save the changes to the note.
The top of the right pane also shows when the note was last updated and a button to delete the note.

## Setup
From your challenges directory, run the following:

```sh
$ et get react-notes-stateful
$ cd react-notes-stateful
$ npm install
$ webpack-dev-server
```
If you go to [localhost:8080][localhost-8080], there will be nothing displayed on the page and there should be no errors in your console.

## Deliverables
1. Your application should start out with no folders and no notes.

  ![React Notes Stateful 1][react-notes-stateful-1]

2. When a folder is created, it should have no notes, so the middle pane should be blank under the note list controls and the right pane should be blank. Newly created folders become the currently selected folder.

  ![React Notes Stateful 2][react-notes-stateful-2]

3. A currently selected folder is highlighted in blue and has white text. Folders that are not the currently selected folder have no highlighting and have black text.

4. Clicking on a folder on the left pane should make that folder the currently selected folder, and its notes should be shown in the middle pane. By default, make the first note in that folder the currently selected note.

5. Clicking on the "New Note" button will create a note with an empty body. Newly created notes become the currently selected note. For notes with an empty body, the title of the note should be "New Note" in the list of notes.

  ![React Notes Stateful 3][react-notes-stateful-3]

6. To update a note, change the note body inside the `textarea` element on the right pane and click the "Update" button. If the note body is less than or equal to 35 characters, then the entire body should be the title of the note in the middle pane. If the note body is greater than 35 characters, the note title should be the first 35 characters of the note body and it should have `...` appended to it.

  ![React Notes Stateful 4][react-notes-stateful-4]

7. A currently selected note is highlighted in yellow.

8. Clicking on a note on the middle pane should make that note the currently selected note, and its body should pre-populate the note form on the right pane.

9. If a user types into the search bar, the list of notes in the middle pane should be updated to be notes whose body has the search input text as a substring. The first note in the search results should become the currently selected note. Furthermore, the search should be case-insensitive. For example, if we start we the following two notes:

  ![React Notes Stateful 5][react-notes-stateful-5]

  And we search for "instagram". We should now see the following:

  ![React Notes Stateful 6][react-notes-stateful-6]

  If our search does not match anything, we should have no notes in the middle pane:

  ![React Notes Stateful 7][react-notes-stateful-7]

10. When there is a currently selected note, clicking on the "Delete" button in the right pane removes the note from the folder.

11. If your application still does not look presentable, this is your chance to redeem yourself by doing some styling!

## Pro Tips
* Start by copying over your `src` folder from the react stateless notes challenge and remove the hard-coded data.
* You should start by deciding which of your components should be upgraded from a stateless component to a stateful component. You should strive to have the least number of stateful components as possible to make your page functional. Additionally, each of your stateful components should have the minimum amount of data in their state that is needed. We recommend reading [Interactivity and Dynamic UIs][react-docs-interactivity-and-dynamic-uis] as well as [Thinking in React][react-docs-thinking-in-react] in the React Docs to help you in this task.
* Your interaction logic should live in stateful components. Try to keep your stateless functional components as simple and logic free as they can be.
* If you chose to follow our component layout in the react stateless notes challenge. We have two hints for you. The first hint will tell you how many components to make stateful. The second hint will tell you exactly which components to make stateful. **You should attempt to answer these questions yourself before looking at the hints!** Our stateless component layout is show here for convenience:

![Recommended Stateless Component Hierarchy][react_notes_component_hierarchy]

**First Hint**

{% show_solution %}
There are two components which you should make stateful.
{% endshow_solution %}

**Second Hint**

{% show_solution %}
You should make the `App` and `NotesSection` components stateful.
{% endshow_solution %}


[localhost-8080]: http://localhost:8080
[react_notes_component_hierarchy]: https://s3.amazonaws.com/horizon-production/images/react_notes_component_hierarchy.png
[react-docs-interactivity-and-dynamic-uis]: https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html
[react-docs-thinking-in-react]: https://facebook.github.io/react/docs/thinking-in-react.html
[react-notes-stateful-0]: https://s3.amazonaws.com/horizon-production/images/react-notes-stateful-notes-0.png
[react-notes-stateful-1]: https://s3.amazonaws.com/horizon-production/images/react-notes-stateful-notes-1.png
[react-notes-stateful-2]: https://s3.amazonaws.com/horizon-production/images/react-notes-stateful-notes-2.png
[react-notes-stateful-3]: https://s3.amazonaws.com/horizon-production/images/react-notes-stateful-notes-3.png
[react-notes-stateful-4]: https://s3.amazonaws.com/horizon-production/images/react-notes-stateful-notes-4.png
[react-notes-stateful-5]: https://s3.amazonaws.com/horizon-production/images/react-notes-stateful-notes-5.png
[react-notes-stateful-6]: https://s3.amazonaws.com/horizon-production/images/react-notes-stateful-notes-6.png
[react-notes-stateful-7]: https://s3.amazonaws.com/horizon-production/images/react-notes-stateful-notes-7.png
