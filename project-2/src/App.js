import { useState } from "react"
import validator from "validator"

function App() {
  const [signupInput, setSignupInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setSignupInput({
      ...signupInput,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (!validator.isEmail(signupInput.email)) {
      return setError("The email you input is invalid.")
    } else if (signupInput.password.length < 5) {
      return setError(
        "The password you entered should contain 5 or more characters."
      )
    } else if (signupInput.password !== signupInput.confirmPassword) {
      return setError("The passwords don't match. try again")
    }
  }

  return (
    <div className="container my-5">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            onChange={handleChange}
            value={signupInput.email}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            onChange={handleChange}
            value={signupInput.password}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            className="form-control"
            onChange={handleChange}
            value={signupInput.confirmPassword}
          />
        </div>

        {error && <p className="text-danger">{error}</p>}

        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
