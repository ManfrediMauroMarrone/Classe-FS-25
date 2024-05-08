import { useState } from "react";

function Counter({ initialValue }) {
  const [countValue, setCountValue] = useState(initialValue);
  const [amount, setAmount] = useState(0)

  function up() {
    setCountValue((prev) => prev + 1);
    console.log(countValue);
  }

  function down() {
    if (countValue > 0) {
      setCountValue((prev) => prev - 1);
    }
  }

  function reset() {
    setCountValue(initialValue);
  }

  function upBy(){
    setCountValue((prev) => prev + amount)
  }

  function handleChange(e){
    setAmount(e.target.valueAsNumber)
    //setAmount(parseInt(e.target.value))
  }

  return (
    <div className="counter">
      <h2>Componente Counter</h2>
      <span>Count = {countValue}</span>
      <br />
      <input type="number" onChange={handleChange}/>
      <br />
      <button onClick={up}>Up</button>
      <button onClick={down}>Down</button>
      <button onClick={reset}>Reset</button>
      <button onClick={upBy}>Up by amount</button>
    </div>
  );
}

export default Counter;
