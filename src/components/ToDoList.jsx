import "./ToDoList.css";
import ToDoItem from "./ToDoItem";
function ToDoList({ todos, onDelete, onToggle, onEdit }) {
  if (todos.length === 0) {
    return (
      <p className="no-todos">No tasks available. Add a task to get started!</p>
    );
  }
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ToDoList;
