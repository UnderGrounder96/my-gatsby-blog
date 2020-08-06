import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"

import "../scss/style.scss"
import LayoutStyles from "../scss/components/layout.module.scss"

export default function Layout({ children }) {
  const fullYear = new Date().getFullYear()
  const data = useStaticQuery(graphql`
    query {
      site {
        meta: siteMetadata {
          author
          description
        }
      }
    }
  `)

  return (
    <div>
      <Helmet>
        <meta name="description" content={data.site.meta.description} />
        <meta name="author" content={data.site.meta.description} />
      </Helmet>
      <div className={LayoutStyles.container}>
        <div className={LayoutStyles.content}>
          <Header />
          {children}
        </div>

        <Footer fullYear={fullYear} />
      </div>
    </div>
  )
}
