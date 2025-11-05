import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="app">
      < className="container">
        <div className="input-section">
          <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new todo"
          className="todo-input"
          />
          <button onClick={addTodo} className="add-btn">Add</button>
          Add Task
        </div>
        <ToDoList todos = {todos} onDelete={deleteTodo} onToggle={toggleTodo} onEdit={editTodo}/>
        {todos.length>0 && (
          <div className="stats">
            <p>Total Tasks: {todos.length}</p>
            <p>Completed Tasks: {todos.filter((todo) => todo.completed).length}</p>
            <p>Pending Tasks: {todos.filter((todo) => !todo.completed).length}</p>
          </div>
        )}
        
      </div>
  )
}

export default App;
