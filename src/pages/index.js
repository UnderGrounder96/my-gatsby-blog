import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

import Style from "../scss/pages/style.module.scss"

export default function IndexPage() {
  return (
    <Layout page="Home">
      <div className={Style.content}>
        <p>
          This is the home page! Need a developer?{" "}
          <Link to="/contact">Contact</Link> me!
        </p>
      </div>
    </Layout>
  )
}
