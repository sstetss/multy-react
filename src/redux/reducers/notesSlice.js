import { createSlice } from "@reduxjs/toolkit";


const notesSlice = createSlice({
   name: 'notes',
   initialState: [],
   reducers: {
      addNote: (state,action) => {
         const newNotes = {
            id: Date.now(),
            name: action.payload.note,
            color: action.payload.color
         }
         state.push(newNotes);
      },
      deleteNote: (state,action) => {
         return state.filter(state => state.id !== action.payload.id)
      }
   }
}) 

export const {addNote,deleteNote} = notesSlice.actions

export default notesSlice.reducer