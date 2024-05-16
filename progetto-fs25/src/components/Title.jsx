import { useEffect, useState } from "react";

function Title(){
    const [todos, setTodos] = useState();

    async function getData() {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/todos");
          const data = await res.json();
          console.log(data);
          setTodos(data);
        } catch (error) {
          console.log(error.message);
        }
      }
    
      useEffect(() => {
        getData();
      }, []);
    
    return (
        <div>
        {todos ? todos.map((item) => {
          return <p key={item.id + item.title}>{item.title} <b>{item.completed.toString()}</b></p>
        }) : <h3>Caricamento...</h3>}
      </div>
    )
}

export default Title;

