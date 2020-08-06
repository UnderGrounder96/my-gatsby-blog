import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import FooterStyles from "../scss/components/footer.module.scss"

export default function Footer({ fullYear }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        meta: siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={FooterStyles.footer}>
      &copy; {fullYear}. <strong>My Gatsby Blog</strong> -{" "}
      {data.site.meta.author}. All rights reserved.
    </footer>
  )
}
