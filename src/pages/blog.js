import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"

import BlogStyles from "../scss/pages/blog.module.scss"

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout page="Blog">
      <ul className={BlogStyles.blogList}>
        {object.array.map(({ node }) => (
          <li key={node.content.id}>
            <h2 className={BlogStyles.title}>
              <Link
                className={BlogStyles.link}
                to={`/blog/${node.fields.slug}`}
              >
                {node.content.title}
              </Link>
            </h2>
            <i>{node.content.date}</i>
            <div
              className={BlogStyles.posts}
              dangerouslySetInnerHTML={{ __html: node.html }}
            ></div>
            <hr />
          </li>
        ))}
      </ul>
    </Layout>
  )
}
