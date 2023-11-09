import { useState, useEffect } from 'react';
import TodoItem from './TodoItem'
import AddTodoForm from './AddTodoForm'
import EditForm from './EditForm'

const App = () => {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value })
    console.log("Current Todo ", currentTodo);
  }

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos));
  
  }, [todos])

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e) {

    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim()
        }
      ])
    }

    setTodo("");
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id
    })

    setTodos(removeItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo })
  }

  function handleUpdateTodo(id, updatedTodo) {

    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });

    setIsEditing(false);
    setTodos(updatedItem);

  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }


  return (
    <div className="flex justify-center h-screen bg-slate-600">
      <div className='flex flex-col items-center bg-white my-4 p-11 w-[50rem]  rounded-lg '>
      <h1 className='text-4xl font-itim mb-3'>Todo List</h1>

      {isEditing ? (
        <EditForm 
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm 
          todo={todo}
          onAddFormSubmit={handleFormSubmit}
          onAddInputChange={handleInputChange}
        />
      )}
      <p className='my-2 font-itim underline underline-offset-3'>{`You have ${todos.length} to do.`}</p>
      <ul className="flex flex-col overflow-y-auto touch-pan-y scroll-smooth">
        {todos.map((todo) => (
          <TodoItem 
            todo={todo}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;