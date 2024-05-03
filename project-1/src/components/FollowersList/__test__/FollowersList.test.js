import { render, screen } from "@testing-library/react"
import FollowersList from "../FollowersList"
import { BrowserRouter } from "react-router-dom"

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
}

describe("FollowersList", () => {
  beforeEach(() => {
    console.log("RUNNING BEFORE EACH TEST")
  })

  beforeAll(() => {
    console.log("RUNNING ONCE BEFORE ALL TESTS")
  })

  afterEach(() => {
    console.log("RUNNING AFTER TEST")
  })

  afterAll(() => {
    console.log("RUNNING ONCE AFTER ALL TESTS")
  })

  it("Should render follower item", async () => {
    render(<MockFollowersList />)
    const followerDivElement = await screen.findByTestId("follower-item-0")
    // screen.debug()
    expect(followerDivElement).toBeInTheDocument()
  })

  // Below test always failed because we only have one mocked item if you want to passed the test create 4 more mock item in __mocks__/axios.js

  // it("Should render multiple follower items", async () => {
  //   render(<MockFollowersList />)
  //   const followerDivElements = await screen.findAllByTestId(/follower-item/i)
  //   expect(followerDivElements.length).toBe(5)
  // })
})
