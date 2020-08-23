import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"

export default function BlogTemplate({ data: { object } }) {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} loading="lazy" />
      },
    },
  }
  return (
    <Layout page="Blog">
      <h2>{object.title}</h2>
      <i>{object.date}</i>
      {documentToReactComponents(object.post.json, options)}
    </Layout>
  )
}

export const data = graphql`
  query($slug: String!) {
    object: contentfulBlogApi(slug: { eq: $slug }) {
      date(formatString: "MMMM Do, YYYY")
      title
      post {
        json
      }
    }
  }
`
