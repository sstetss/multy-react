import { useDispatch } from "react-redux"
import { deleteNote } from "../../redux/reducers/notesSlice"
import './NoteItem.css'

const NoteItem = (props) => {
   const {id,name,color} = props.note
   const dispatch = useDispatch()
   console.log(color);
   const styleText = {
      backgroundColor : color
   }

   return (
      <div className="note-item"style={styleText}>
         <h2>{name}</h2>
         <button className="note-but" onClick={()=> {dispatch(deleteNote({id}))}}>Delete</button>
      </div>
   )
}

export default NoteItem