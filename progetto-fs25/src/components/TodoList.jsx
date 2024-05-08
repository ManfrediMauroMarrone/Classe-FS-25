import React from 'react'

function TodoList({todos, remove}) {
    console.log(todos);
  return (
    <ul>
        {todos.length > 0 ? todos.map((element, index) => {
            return <li key={index}>{element} <button onClick={() => remove(index)}>Remove</button></li>
        }) : <p>Aggiungi un nuovo todo</p>}
    </ul>
  )
}

export default TodoList