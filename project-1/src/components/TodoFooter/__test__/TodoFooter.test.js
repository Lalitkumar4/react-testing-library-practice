import { render, screen } from "@testing-library/react"
import TodoFooter from "../TodoFooter"
import { BrowserRouter } from "react-router-dom"

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  )
}

describe("TodoFooter", () => {
  it("Should render the correct amount of incomplete tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />)
    const paragraphElement = screen.getByText(/5 tasks left/i)
    expect(paragraphElement).toBeInTheDocument()
  })

  it("Should render 'task' when the number of incomplete tasks is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />)
    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toBeInTheDocument()
  })
})

// it("2-Should render 'task' when the number of incomplete tasks is one", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />)
//   const paragraphElement = screen.getByText(/1 task left/i)
//   expect(paragraphElement).toBeVisible()
// })

// it("3-Should render 'task' when the number of incomplete tasks is one", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />)
//   const paragraphElement = screen.getByText(/1 task left/i)
//   expect(paragraphElement).toContainHTML("p")
// })

// it("4-Should render 'task' when the number of incomplete tasks is one", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />)
//   const paragraphElement = screen.getByTestId("para")
//   expect(paragraphElement).toHaveTextContent("1 task left")
// })

// it("5-Should render 'task' when the number of incomplete tasks is one", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />)
//   const paragraphElement = screen.getByTestId("para")
//   expect(paragraphElement).not.toBeFalsy()
// })

// it("6-Should render 'task' when the number of incomplete tasks is one", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />)
//   const paragraphElement = screen.getByTestId("para")
//   expect(paragraphElement.textContent).toBe("1 task left")
// })
