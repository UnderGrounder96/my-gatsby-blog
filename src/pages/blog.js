import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"

export default function BlogPage() {
  const { object } = useStaticQuery(graphql`
    query {
      object: allMarkdownRemark {
        array: edges {
          node {
            content: frontmatter {
              id
              title
              category
              description
              date
              homepage
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout page="Blog">
      <h1>Blog</h1>
      <ul>
        {object.array.map(({ node }) => (
          <li key={node.content.id}>
            <h2>{node.content.title}</h2>
            <p>
              <a href={node.content.category}>{node.content.category}</a>
              <br />
              {node.content.date}
              <br />
              {node.content.description}
              <br />
              {node.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
