import React, { useState } from "react";
import "./App.css";


function TodoForm({ addTodo }){
    const [value, setValue] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("");
    }
}


function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  );
};

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn Node.js" },
    { text: "Learn React.js" },
    { text: "Learn Java" }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;