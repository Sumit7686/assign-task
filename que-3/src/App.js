import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

// Main TodoApp Component
const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1 className="my-3 text-center">Todo App</h1>

      <AddTodo onAdd={addTodo} />

      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default TodoApp;
