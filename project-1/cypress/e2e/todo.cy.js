/* eslint-disable no-undef */

/// <reference types="cypress"/>

describe("create todo", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("user can create a todo", () => {
    // add todo item and click on add button
    cy.findByRole("textbox").type("Buy Grocery")
    cy.findByRole("button", { name: /add/i }).click()

    // Verify task add
    cy.findByText(/buy grocery/i).should("be.visible")

    // click in todo item to check change style
    cy.findByText(/buy grocery/i).click()
  })
})
