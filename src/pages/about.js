import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

import Style from "../scss/pages/style.module.scss"

export default function AboutPage() {
  return (
    <Layout page="About">
      <div className={Style.content}>
        <p>
          I'm a Computer Science Student with deep Programming Skills. Feel free
          to <Link to="/contact">Reach</Link> me!
        </p>
      </div>
    </Layout>
  )
}
