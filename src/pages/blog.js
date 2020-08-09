import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"

export default function BlogPage() {
  const data = useStaticQuery(graphql`
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
        {data.object.array.map(obj => (
          <li key={obj.node.content.id}>
            <h2>{obj.node.content.title}</h2>
            <p>
              <a href={obj.node.content.category}>
                {obj.node.content.category}
              </a>
              <br />
              {obj.node.content.date}
              <br />
              {obj.node.content.description}
              <br />
              {obj.node.html}
            </p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
