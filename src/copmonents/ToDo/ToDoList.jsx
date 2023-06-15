import { useSelector } from "react-redux"
import ToDoItem from "./ToDoItem";
import './ToDoList.css'


const ToDoList = () =>{

   const todos = useSelector(state => state.todos)
   console.log(todos);

   return(
      <div className="todo-list">
         {
            todos.map((todo)=>(
               <ToDoItem key={todo.id} todo={todo}/>
            ))
         }
      </div>
   )
}

export default ToDoList