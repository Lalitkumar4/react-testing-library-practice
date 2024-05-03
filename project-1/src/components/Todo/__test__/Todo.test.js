import { fireEvent, render, screen } from "@testing-library/react"
import Todo from "../Todo"
import { BrowserRouter } from "react-router-dom"

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
  const buttonElement = screen.getByRole("button", { name: /Add/i })

  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } })
    fireEvent.click(buttonElement)
  })
}

describe("Todo", () => {
  it("Should have an item", () => {
    render(<MockTodo />)
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i)
    expect(divElement).toBeInTheDocument()
  })

  it("Should render multiple items", () => {
    render(<MockTodo />)
    addTask(["Go Grocery Shopping", "Pet my Cat", "Wash my Hands"])
    const divElement = screen.getAllByTestId("task-container")
    expect(divElement.length).toBe(3)
  })

  it("Tasks should not have comepleted class when initially rendered", () => {
    render(<MockTodo />)
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i)
    expect(divElement).not.toHaveClass("todo-item-active")
  })

  it("Should have completed class when clicked", () => {
    render(<MockTodo />)
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i)
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active")
  })
})
