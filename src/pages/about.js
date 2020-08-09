import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

export default function AboutPage() {
  return (
    <Layout page="About">
      <h1>About</h1>
      <p>
        I'm a Computer Science Student with deep Programming Skills. Feel free
        to <Link to="/contact">Reach</Link> me!
      </p>
    </Layout>
  )
}
