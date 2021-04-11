import { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Wash Dishes', done: false },
    { id: 2, text: 'Do Laundry', done: false },
    { id: 3, text: 'Take Shower', done: false },
  ]);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      
      <ToDoList todos={todos} setTodos={setTodos} />
      <AddToDo setTodos={setTodos} />
    </div>
  );
}

export default App;