import React from "react"
import { Link } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function IndexPage() {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <p>
        This is the home page! Need a developer?{" "}
        <Link to="/contact">contact</Link> me!
      </p>
      <Footer />
    </div>
  )
}
