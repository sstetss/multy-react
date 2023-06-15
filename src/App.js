import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './copmonents/Nav/nav.component';
import About from './copmonents/Nav/About.component';
import Notes from './copmonents/Nav/Notes.component';
import ToDo from './copmonents/Nav/Todo.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/todo' element={<ToDo/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
