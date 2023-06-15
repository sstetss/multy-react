import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteToDo } from "../../redux/reducers/toDoSplice"
import './ToDoItem.css'


const ToDoItem = (props) => {
   const {id,name} = props.todo
   const dispatch = useDispatch()
   
   const [isGrey, setIsGrey] = useState(false)

   const onCheck = () =>{
      setIsGrey(!isGrey)
   }

   const textStyle = {
      color: isGrey ? "grey" : "black",
      textDecoration: isGrey ?  "line-through" : "none"
   }
   return (
      <div className="todo-item">
         <input type="checkbox" checked={isGrey} onChange={onCheck}/>
         <h2 style={textStyle}>{name}</h2>
         <button className="item-but" onClick={()=> {dispatch(deleteToDo({id}))}}>Delete</button>
      </div>
   )
}

export default ToDoItem