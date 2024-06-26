import { useState } from "react"
import "./AddInput.css"
import { v4 as uuidv4 } from "uuid"

function AddInput({ setTodos, todos }) {
  const [todo, setTodo] = useState("")

  const addTodo = () => {
    let updatedTodos = [
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
      },
    ]
    setTodos(updatedTodos)
    setTodo("")
  }

  return (
    <div className="input-container">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  )
}

export default AddInput
