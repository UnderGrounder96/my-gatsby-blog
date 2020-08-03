import React from "react"
import { Link } from "gatsby"

export default function IndexPage() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        This is the home page! Need a developer?{" "}
        <Link to="/contact">contact</Link> me!
      </p>
    </div>
  )
}
