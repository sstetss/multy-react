import NoteList from "../Notes/noteList"
import AddNote from "../Notes/addNote"


function Notes(){
   return(
      <div>
         <h1>Notes</h1>
         <AddNote/>
         <NoteList/>
      </div>
   )
}

export default Notes