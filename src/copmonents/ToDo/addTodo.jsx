import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToDo } from "../../redux/reducers/toDoSplice"
import './ToDo.css'


const AddToDo = () => {
   const [value,setValue] = useState('')
   const dispatch = useDispatch()


   const onSubmit = () => {
      dispatch(addToDo({todo: value}))
      setValue('')
   }

   return (
      <div className="add-todo">
         <input type="text" value={value} onChange={(e)=> {setValue(e.target.value)}}/>
         <button className="todo-but" onClick={onSubmit}>Add</button>
      </div>
   )
}

export default AddToDo