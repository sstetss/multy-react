import {configureStore} from '@reduxjs/toolkit'
import notesReducer from './reducers/notesSlice'
import toDoReducer from './reducers/toDoSplice'

export default configureStore({
   reducer: {
      notes: notesReducer,
      todos: toDoReducer,
   }
})