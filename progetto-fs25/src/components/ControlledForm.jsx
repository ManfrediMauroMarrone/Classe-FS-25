import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

function ControlledForm() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewtodo] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setNewtodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewtodo('')
  }

  function removeTodo(todoIndex){
    const filtered = todos.filter((item, index) => index != todoIndex)
    setTodos(filtered)
  }

  useEffect(() => {
    //console.log(todos);
  }, [todos]);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newTodo}/>
        <button type="submit" disabled={newTodo.length < 4}>Add</button>
      </form>
      <TodoList todos={todos} remove={removeTodo}/>
    </div>
  );
}

export default ControlledForm;
