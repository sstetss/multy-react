import { createSlice } from "@reduxjs/toolkit";


const toDoSlice = createSlice({
   name: 'toDos',
   initialState: [],
   reducers: {
      addToDo: (state,action) => {
         const newToDo = {
            id: Date.now(),
            name: action.payload.todo
         }
         state.push(newToDo);
      },
      deleteToDo: (state,action) => {
         return state.filter(state => state.id !== action.payload.id)
      }
   }
}) 

export const {addToDo,deleteToDo} = toDoSlice.actions

export default toDoSlice.reducer