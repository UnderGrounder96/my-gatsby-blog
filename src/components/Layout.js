import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "./SEO"
import Header from "../components/Header"
import Footer from "../components/Footer"

import "../scss/style.scss"
import LayoutStyles from "../scss/components/layout.module.scss"

export default function Layout({ children, page }) {
  const fullYear = new Date().getFullYear()
  const { site } = useStaticQuery(graphql`
    query {
      site {
        meta: siteMetadata {
          title
          author
          description
        }
      }
    }
  `)

  return (
    <div className={LayoutStyles.container}>
      <SEO
        author={site.meta.author}
        description={site.meta.description}
        title={site.meta.title}
        page={page}
      />
      <div className={LayoutStyles.content}>
        <Header />
        <main role="main">{children}</main>
      </div>

      <Footer author={site.meta.author} fullYear={fullYear} />
    </div>
  )
}
