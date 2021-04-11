import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  const todos = [
    { id: 1, text: 'Wash Dishes', done: false },
    { id: 2, text: 'Do Laundry', done: false },
    { id: 3, text: 'Take Shower', done: false },
  ];

  return (
    <div className="App">
      <h1>To-Do List</h1>
      
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;