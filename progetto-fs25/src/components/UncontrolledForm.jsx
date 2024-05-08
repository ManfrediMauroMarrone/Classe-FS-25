import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const message = inputRef.current.value;

      const userMessage = {
        message,
      };

      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userMessage)
      })

      const data = await res.json()

      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <h2>Form controllato</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
