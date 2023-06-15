import AddToDo from "../ToDo/addTodo"
import ToDoList from "../ToDo/ToDoList"

function ToDo(){
   return(
      <div>
         <h1>ToDo</h1>
         <AddToDo/>
         <ToDoList/>
      </div>
   )
}

export default ToDo