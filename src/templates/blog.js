import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export default function BlogTemplate({ data: { object } }) {
  return (
    <Layout page="Blog">
      <h2>{object.details.title}</h2>
      <i>{`${object.details.category} at ${object.details.date}`}</i>
      <div dangerouslySetInnerHTML={{ __html: object.html }}></div>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String!) {
    object: markdownRemark(fields: { slug: { eq: $slug } }) {
      details: frontmatter {
        date
        title
        category
      }
      html
    }
  }
`
