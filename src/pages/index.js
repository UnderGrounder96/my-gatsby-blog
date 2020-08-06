import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

export default function IndexPage() {
  return (
    <div>
      <Layout>
        <h1>Home</h1>
        <p>
          This is the home page! Need a developer?{" "}
          <Link to="/contact">Contact</Link> me!
        </p>
      </Layout>
    </div>
  )
}
