import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <h1>Todo App с Redux Toolkit и Thunk</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;