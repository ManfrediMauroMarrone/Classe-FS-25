import { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";

function App() {
  const [name, setName] = useState("Come mi chiamo?");
  const [userName, setUserName] = useState("");
  

  function handleChange(e) {
    setUserName(e.target.value);
  }

  function handleClick() {
    setName(userName);
  }

  

  return (
    <>
      <h1>Benvenuti!</h1>
      <Title/>
      <input type="text" onChange={handleChange} />
      <button onClick={() => handleClick("Paperino")}>Change Name</button>
     
    </>
  );
}

export default App;
