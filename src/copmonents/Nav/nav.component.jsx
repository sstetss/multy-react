import { NavLink } from "react-router-dom"
import './Nav.css'

function Nav(){
   return(
     <nav className="nav">
         <NavLink className="link" to="/about">About</NavLink>
         <NavLink className="link" to="/notes">Notes</NavLink>
         <NavLink className="link" to="/todo">ToDo</NavLink>
     </nav>
   )
 }

 export default Nav