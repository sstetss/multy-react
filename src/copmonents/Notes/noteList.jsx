import { useSelector } from "react-redux"
import NoteItem from "./noteItem";
import './NoteList.css'


const NoteList = () =>{

   const notes = useSelector(state => state.notes)
   console.log(notes);

   return(
      <div className="note-list">
         {
            notes.map((note)=> (
               <NoteItem key={note.id} note={note}/>
            ))
         }
      </div>
   )
}

export default NoteList