import React from "react"
import { Link } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function AboutPage() {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>
        I'm a Computer Science Student with deep Programming Skills. Feel free
        to <Link to="/contact">Reach</Link> me!
      </p>
      <Footer />
    </div>
  )
}
