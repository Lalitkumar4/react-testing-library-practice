import { render, screen } from "@testing-library/react"
import Header from "../Header"

describe("Header", () => {
  test("Should render same text passed into title prop", () => {
    render(<Header title="My Header" />)
    const headingElement = screen.getByText(/my header/i)
    expect(headingElement).toBeInTheDocument()
  })
})

// it("2-Should render same text passed into title prop", () => {
//   render(<Header title="My Header" />)
//   const headingElement = screen.getByRole("heading")
//   expect(headingElement).toBeInTheDocument()
// })

// it("3-Should render same text passed into title prop", () => {
//   render(<Header title="My Header" />)
//   const headingElement = screen.getByRole("heading", { name: "My Header" })
//   expect(headingElement).toBeInTheDocument()
// })

// it("4-Should render same text passed into title prop", () => {
//   render(<Header title="My Header" />)
//   const headingElement = screen.getByTitle("Header")
//   expect(headingElement).toBeInTheDocument()
// })

// it("5-Should render same text passed into title prop", () => {
//   render(<Header title="My Header" />)
//   const headingElement = screen.getByTestId("header-1")
//   expect(headingElement).toBeInTheDocument()
// })

// it("6-Should render same text passed into title prop", async () => {
//   render(<Header title="My Header" />)
//   const headingElement = await screen.findByText(/my header/i)
//   expect(headingElement).toBeInTheDocument()
// })

// it("7-Should render same text passed into title prop", () => {
//   render(<Header title="My Header" />)
//   const headingElement = screen.queryByText(/dogs/i)
//   expect(headingElement).not.toBeInTheDocument()
// })

// it("8-Should render same text passed into title prop", () => {
//   render(<Header title="My Header" />)
//   const headingElements = screen.getAllByRole("heading")
//   expect(headingElements.length).toBe(2)
// })
