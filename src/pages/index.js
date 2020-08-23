import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Spinner from "../components/Spinner"

export default function IndexPage() {
  return (
    <div>
      <Spinner duration={1500} />

      <Layout page="Home">
        <div className="content">
          <p>
            This is the home page! Need a developer?{" "}
            <Link to="/contact">Contact</Link> me!
          </p>
        </div>
      </Layout>
    </div>
  )
}
