import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export const data = graphql`
  query($slug: String!) {
    object: markdownRemark(fields: { slug: { eq: $slug } }) {
      details: frontmatter {
        title
        date
      }
      html
    }
  }
`
export default function BlogTemplate({ data }) {
  return (
    <Layout page="Blog">
      <h2>{data.object.details.title}</h2>
      <i>{data.object.details.date}</i>
      <div dangerouslySetInnerHTML={{ __html: data.object.html }}></div>
    </Layout>
  )
}
